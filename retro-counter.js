import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'

/**
 * `retro-counter`
 * A fake visitor counter element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

class RetroCounter extends PolymerElement {
  static get template() {
    return html`<style>
        :host {
          display: inline-flex;
          flex-direction: row;
        }
        span {
          display: inline-block;
          border: 1px solid black;
          box-shadow: 5px 5px 5px #777;
          font-size: 22px;
          line-height: 22px;
          height: 22px;
          width: 17px;
          padding: 2px;
          background-color: beige;
          color: teal;
        }
      </style>
      <div>
        <span>[[digit1]]</span>
        <span>[[digit2]]</span>
        <span>[[digit3]]</span>
        <span>[[digit4]]</span>
      </div>`
  }

  static get properties() {
    return {
      digit1: {
        type: Number,
        value: 0
      },
      digit2: {
        type: Number,
        value: this.randomDigit
      },
      digit3: {
        type: Number,
        value: this.randomDigit
      },
      digit4: {
        type: Number,
        value: this.randomDigit
      }
    }
  }

  static get randomDigit() {
    return Math.floor(Math.random() * 10)
  }
}

window.customElements.define('retro-counter', RetroCounter)
