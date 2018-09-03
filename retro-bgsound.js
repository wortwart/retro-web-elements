import {html, PolymerElement} from '@polymer/polymer/polymer-element.js'
import MidiFile from 'jasmid/midifile.js'
import Replayer from 'jasmid/replayer.js'
import {Synth} from 'jasmid/synth.js'
import {AudioPlayer} from 'jasmid/audio.js'

/**
 * `retro-bgsound`
 * The bgsound element, revisited
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bgsound
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
// https://www.vgmusic.com/music/computer/commodore/commodore/
class RetroBgsound extends PolymerElement {
  constructor() {
    super();
    const fName = this.attributes.src.nodeValue
    const midiExt = '.mid'
    if (fName.indexOf(midiExt) === fName.length - midiExt.length) {
      this.outerHTML = this.outerHTML.replace('retro-', '')
      if (navigator.userAgent.indexOf('Trident') < 0)
        this.play(fName)
    }
  }

  static get template() {
    return html`<style>
        :host {
          display: inline-block;
          visibility: hidden;
          width: 0;
          height: 0;
        }
      </style>
      <audio autoplay>
        <source src=[[src]] type="audio/mp3">
      </audio>`
  }

  static get properties() {
    return {
      src: {
        type: String
      }
    }
  }

  loadRemote(path, callback) {
    var fetch = new XMLHttpRequest()
    fetch.open('GET', path)
    fetch.overrideMimeType('text/plain; charset=x-user-defined')
    fetch.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var t = this.responseText || ''
        var ff = []
        var mx = t.length
        var scc= String.fromCharCode
        for (var z = 0; z < mx; z++)
          ff[z] = scc(t.charCodeAt(z) & 255)
        callback(ff.join(''))
      }
    }
    fetch.send()
  }

  play(file) {
    this.loadRemote(file, data => {
      const midiFile = MidiFile(data)
      const synth = Synth(44100)
      const replayer = Replayer(midiFile, synth)
      const audio = AudioPlayer(replayer)
    })
  }
}

window.customElements.define('retro-bgsound', RetroBgsound)
