// import { publish } from './pubsub.js';
import { deepMerge } from './libs.js';
import { publish } from './pubsub.js';
import { generateDom, manipulation, renderVirtualDom } from './render/dom.js';

export default async function preview(component, classes, uuid) {
  document.body.innerHTML = '';
  const main = document.createElement('main');
  const webComponent = document.createElement(component.webComponentName);
  webComponent.overrideExternalConfig = true;
  webComponent.innerHTML = component.html;
  main.appendChild(webComponent);
  const virtualdom = generateDom(main.childNodes);
  virtualdom[0].attributesValues = deepMerge({}, webComponent.attributesValues, component.attributesValues);

  main.innerHTML = '';
  document.body.append(main);
  await main.append(...renderVirtualDom(manipulation(virtualdom)));

  webComponent.style.display = 'inline-grid';
  webComponent.style.width = 'auto';
  webComponent.style.marginInlineStart = '0px';
  // webComponent.runConfigsByViewport();
  await document.body.style.setProperty('display', 'block');
  await main.style.setProperty('display', 'block');
  await window.getComputedStyle(document.body);

  window.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
    },
    true,
  );
  setTimeout(async () => {
    const bodyRect = await document.body.getBoundingClientRect();
    publish('raqn:editor:preview:render', { bodyRect, uuid }, { usePostMessage: true, targetOrigin: '*' });
  }, 250);
}
