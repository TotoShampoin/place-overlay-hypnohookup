// ==UserScript==
// @name         r/Place Overlay relocator
// @namespace    https://github.com/TotoShampoin/place-overlay-hypnohookup
// @version      2.0.0
// @description  Same as the overlay, but with a hud to relocate easily
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
        img.src = "https://cdn.discordapp.com/attachments/1133123525545316443/1133124695798067250/realhooky_punched.png";
        img.style = "position: absolute;left:500px;top:500px; width: 17px; height: 24px; image-rendering: pixelated; opacity: 0";
        console.log(img);
        return img;
    })();
    window.addEventListener("keydown", e => {
      if(e.key === "f") {
        switch(overlay.style.opacity) {
          case "1": overlay.style.opacity = "0"; break;
          case "0": overlay.style.opacity = "1"; break;
        }
      }
      if(e.key === "r") {
        const [x, y] = prompt("Enter the x, y new coordinates")
          .split(",")
          .map(s => parseInt(s));
        const nx = x + 1500
        const ny = y + 1000
        overlay.style.left = `${nx}px`;
        overlay.style.top = `${ny}px`;
        alert(`left:${nx};top:${ny}`)
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
