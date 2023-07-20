// ==UserScript==
// @name         r/Place Overlay
// @namespace    https://github.com/TotoShampoin/place-overlay-hypnohookup
// @version      1.0.0
// @description  A visual overlay to show errors in tile colors of a desired image in r/place
// @author       github.com/TotoShampoin
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
      document
        .getElementsByTagName("garlic-bread-embed")[0]
        .shadowRoot
        .children[0]
        .getElementsByTagName("garlic-bread-canvas")[0]
        .shadowRoot
        .children[0]
        .appendChild(
          (function () {
              const img = document.createElement("img");
              img.src = "https://cdn.discordapp.com/attachments/669939027537035297/1131644724529344542/hooky.png";
              img.style = "position: absolute;left:334px;top:144px; image-rendering: pixelated; opacity: .5";
              console.log(img);
              return img;
          })())
  }, false);
}
