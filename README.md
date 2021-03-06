# retro-web-elements

A collection of six HTML elements to revive the joys of web development in the 90s, built with [Polymer 3](https://www.polymer-project.org/).

- Repository: https://github.com/wortwart/retro-web-elements
- NPM: [retro-elements](https://www.npmjs.com/package/retro-elements)
- Implementation: https://github.com/wortwart/retro-web-app
- Demo: https://woerter.de/projects/retro-web/

## Contents

- **`retro-basefont`**: The `<basefont>` element.
- **`retro-bgsound`**: The `<bgsound>` element. Uses [jasmid](https://github.com/wortwart/jasmid) to parse MIDI files in browsers that don't support this element natively (= everything not Internet Explorer). The sound quality leaves room for improvement.
- **`retro-blink`**: The `<blink>` element.
- **`retro-counter`**: Creates a 90s-style visitor counter with a random value.
- **`retro-gif`**: Creates fake GIF animations (jumping, pulsating).
- **`retro-spacer`**: The `<spacer>` element.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.
