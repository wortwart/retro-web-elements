import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'

/**
 * `retro-blink`
 * The blink element, revisited
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RetroBlink extends PolymerElement {
  static get template() {
    return html`<style>
        @keyframes blinking {
          0% {
            visibility: hidden;
          }
          50% {
            visibility: hidden;
          }
        }
        :host {
          display: inline;
          animation: 2s linear infinite blinking;
        }
      </style>
      <span><slot></slot></span>`
  }
}

window.customElements.define('retro-blink', RetroBlink)
