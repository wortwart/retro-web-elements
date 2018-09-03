import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'

/**
 * `retro-spacer`
 * The spacer element, revisited
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/spacer
class RetroSpacer extends PolymerElement {
  constructor() {
    super()
    const attrs = {
      type: 'horizontal',
      align: 'left',
      size: '1em',
      width: '1em',
      height: '1em'
    }
    for (let key in attrs) {
      if (this.attributes[key]) {
        attrs[key] = this.attributes[key].nodeValue
        if (['size', 'width', 'height'].indexOf(key) >= 0)
          attrs[key] += 'px'
      }
    }
    if (attrs.type === 'horizontal') {
      this.style.width = attrs.size
    } else if (attrs.type === 'vertical') {
      this.style.height = attrs.size
    } else if (attrs.type === 'block') {
      this.style.width = attrs.width
      this.style.height = attrs.height
    }
    if (attrs.align === 'right')
      this.style.float = 'right'
  }

  static get template() {
    return html`<style>
        :host {
          display: inline-block;
        }
      </style>
      <span></span>`
  }
}

window.customElements.define('retro-spacer', RetroSpacer)
