import { readBlockConfig, decorateIcons, getMetadata } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  console.log('decorating footer', block);
  const cfg = readBlockConfig(block);
  const meta = getMetadata('footer');
  console.log('footer config', cfg, meta);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  console.log(`fetching footer from ${footerPath}`);
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);
  }
}
