import ComponentBase from '../../scripts/component-base.js';
import { getMeta } from '../../scripts/libs.js';

export default class Footer extends ComponentBase {
  fragment = `${getMeta('basepath')}/footer.plain.html`;

  ready() {
    const child = this.children[0];
    child.replaceWith(...child.children);
    this.nav = this.querySelector('ul');
    this.nav.setAttribute('role', 'navigation');
    this.classList.add('full-width');
    this.classList.add('horizontal');
  }
}
