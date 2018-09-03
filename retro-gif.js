import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'

/**
 * `retro-gif`
 * Animated gifs, FTW!
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RetroGif extends PolymerElement {

  static get template() {
    return html`
      <style>
        @keyframes jump {
          from {transform: translate(0, 0);}
          to {transform: translate(0, 50%);}
        }
        @keyframes pulsate {
          from {transform: scale(1);}
          to {transform: scale(1.15);}
        }
        #jump {
          animation: .6s alternate infinite jump;
        }
        #pulsate {
          animation: .4s alternate infinite pulsate;
        }
      </style>
      <img src=[[src]] alt=[[alt]] id=[[animationLc]]>
    `
  }

  static get properties() {
    return {
      src: {
        type: String
      },
      alt: {
        type: String
      },
      animation: {
        type: String
      },
      animationLc: {
        type: String,
        computed: 'toLower(animation)'
      }
    }
  }

  toLower(string) {
    return string.toLowerCase();
  }
}

window.customElements.define('retro-gif', RetroGif)
