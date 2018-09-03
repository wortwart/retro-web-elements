import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'

/**
 * `retro-basefont`
 * The basefont element, revisited
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RetroBasefont extends PolymerElement {

  constructor() {
    super()
    const bStyle = document.body.style
    const attr = this.attributes
    if (attr.face)
      bStyle.fontFamily = attr.face.nodeValue
    if (attr.size)
      bStyle.fontSize = attr.size.nodeValue
    if (attr.color)
      bStyle.color = attr.color.nodeValue
  }
}

window.customElements.define('retro-basefont', RetroBasefont)
