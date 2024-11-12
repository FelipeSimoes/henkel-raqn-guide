import { getMeta, metaTags, readValue, deepMerge, getBaseUrl } from '../libs.js';

window.raqnComponentsMasterConfig = window.raqnComponentsMasterConfig || null;

// eslint-disable-next-line import/prefer-default-export
export const externalConfig = {
  async getConfig(componentName, configName) {
    const configNameFallback = configName || 'default';
    window.raqnComponentsMasterConfig ??= await this.loadConfig();
    const componentConfig = window.raqnComponentsMasterConfig?.[componentName];
    const parsedConfig = componentConfig?.[configNameFallback];

    // return copy of object to prevent mutation of raqnComponentsMasterConfig;
    if (parsedConfig) return deepMerge({}, parsedConfig);
    return {};
  },

  async loadConfig(rawConfig) {
    window.raqnComponentsConfig ??= (async () => {
      const {
        themeConfigComponent: { metaName },
        themeConfig,
      } = metaTags;
      const metaConfigPath = getMeta(metaName);
      if (!metaConfigPath.includes(`${themeConfig.fallbackContent}`)) {
        // eslint-disable-next-line no-console
        console.error(
          `The configured "${metaName}" config url is not containing a "${themeConfig.fallbackContent}" folder.`,
        );
        return {};
      }
      const basepath = getBaseUrl();
      const configPath = `${basepath}${metaConfigPath}.json`;
      let result = null;
      try {
        const response = await fetch(`${configPath}`);
        if (response.ok) {
          result = await response.json();
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
      return result;
    })();

    window.raqnComponentsConfig = await window.raqnComponentsConfig;

    return rawConfig ? window.raqnComponentsConfig : this.simplifiedConfig();
  },

  simplifiedConfig() {
    if (window.raqnComponentsConfig && !window.raqnParsedConfigs) {
      window.raqnParsedConfigs ??= {};

      Object.keys(window.raqnComponentsConfig).forEach((key) => {
        if (!window.raqnComponentsConfig[key]) return;
        const { data } = window.raqnComponentsConfig[key];
        if (data?.length) {
          window.raqnParsedConfigs[key] = window.raqnParsedConfigs[key] || {};
          window.raqnParsedConfigs[key] = readValue(data, window.raqnParsedConfigs[key]);
        }
      });
    }

    return window.raqnParsedConfigs;
  },
};
