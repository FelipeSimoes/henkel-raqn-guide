import ComponentLoader from './component-loader.js';
import ComponentMixin from './component-mixin.js';
import {
  config,
  eagerImage,
  getMeta,
  publishBreakpointChange,
} from './libs.js';

function getInfo(block) {
  const el = block;
  const tagName = el.tagName.toLowerCase();
  let name = tagName;
  if (!config.semanticBlocks.includes(tagName)) {
    [name] = Array.from(el.classList);
  }
  return {
    name,
    el,
  };
}

function getInfos(blocks) {
  return blocks.map((block) => getInfo(block));
}

export async function start({ name, el }) {
  const loader = new ComponentLoader(name, el);
  return loader.start();
}

export async function startBlock(block) {
  return start(getInfo(block));
}

function initEagerImages() {
  const eagerImages = getMeta('eager-images');
  if (eagerImages) {
    const length = parseInt(eagerImages, 10);
    eagerImage(document.body, length);
  }
}

function getLcp() {
  const lcpMeta = getMeta('lcp');
  return lcpMeta
    ? lcpMeta.split(',').map((name) => ({ name: name.trim() }))
    : [];
}

function includesInfo(infos, search) {
  return infos.find(({ name }) => name === search);
}

async function init() {
  publishBreakpointChange();
  ComponentMixin.getMixins();

  // mechanism of retrieving lang to be used in the app
  // TODO - set this based on url structure or meta tag for current path
  document.documentElement.lang ||= 'en';

  initEagerImages();

  // query only known blocks
  const blockSelectors = `.${config.blocks.join(', .')}`;
  const blocks = [
    document.body.querySelector(config.semanticBlocks[0]),
    ...document.querySelectorAll(blockSelectors),
    ...document.body.querySelectorAll(config.semanticBlocks.slice(1).join(',')),
  ];

  const data = getInfos(blocks);
  const lcp = getLcp().map(({ name }) => includesInfo(data, name) || { name });
  const delay = window.raqnLCPDelay || [];
  const lazy = data.filter(
    ({ name }) => !includesInfo(lcp, name) && !includesInfo(delay, name),
  );

  // start with lcp
  Promise.all(lcp.map(({ name, el }) => start({ name, el }))).then(() => {
    document.body.style.display = 'unset';
  });
  // timeout for the rest to proper prioritize in case of stalled loading
  lazy.map(({ name, el }) => setTimeout(() => start({ name, el })));
}

init();
