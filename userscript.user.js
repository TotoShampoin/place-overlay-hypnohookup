// ==UserScript==
// @name         r/Place Overlay
// @namespace    https://github.com/TotoShampoin/place-overlay-hypnohookup
// @version      3.1.1
// @description  A visual overlay to show errors in tile colors of a desired image in r/place
// @author       github.com/TotoShampoin
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
  function createTemplate(x, y, w, h, src) {
    const img = document.createElement("img");
    img.src = src; //"https://cdn.discordapp.com/attachments/1131271629377392772/1132630418701697034/hookypolicepixel2_punched.png";
    img.style = `position: absolute;left:${x}px;top:${y}px; width: ${w}px; height: ${h}px; image-rendering: pixelated; opacity: 1`; // left:369px;top:872px;
    console.log(img);
    window.addEventListener("keydown", e => {
      if(e.key === "t") {
        switch(img.style.opacity) {
          case "1": img.style.opacity = "0"; break;
          case "0": img.style.opacity = "1"; break;
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
      .appendChild(img);
  }

  `left:2890;top:999`
  window.addEventListener('load', () => {
    createTemplate(869, 872, 16, 22, "https://cdn.discordapp.com/attachments/1131271629377392772/1132630418701697034/hookypolicepixel2_punched.png");
    createTemplate(2890, 999, 17, 24, "https://cdn.discordapp.com/attachments/1133123525545316443/1133124695798067250/realhooky_punched.png");
}, false);
}
