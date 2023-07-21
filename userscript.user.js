// ==UserScript==
// @name         r/Place Overlay
// @namespace    https://github.com/TotoShampoin/place-overlay-hypnohookup
// @version      1.2.3
// @description  A visual overlay to show errors in tile colors of a desired image in r/place
// @author       github.com/TotoShampoin
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
  window.addEventListener('load', () => {
    const overlay = (function () {
        const img = document.createElement("img");
        img.src = "https://cdn.discordapp.com/attachments/669939027537035297/1131644724529344542/hooky.png";
        img.style = "position: absolute;left:760px;top:314px; width: 39px; height: 48px; image-rendering: pixelated; opacity: 1";
        console.log(img);
        return img;
    })();
    window.addEventListener("keydown", e => {
      if(e.key === "t") {
        console.log(overlay.style.opacity)
        switch(overlay.style.opacity) {
          case "1": overlay.style.opacity = "0"; break;
          case "0": overlay.style.opacity = "1"; break;
        }
      }
    });
    document
      .getElementsByTagName("garlic-bread-embed")[0]
      .shadowRoot
      .children[0]
      .getElementsByTagName("garlic-bread-canvas")[0]
      .shadowRoot
      .children[0]
      .appendChild(overlay);
}, false);
}
