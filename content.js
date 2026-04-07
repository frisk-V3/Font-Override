(function () {
  function injectFont(dataUrl) {
    const css = `
      @font-face {
        font-family: 'DynamicFont';
        src: url('${dataUrl}') format('woff2');
        font-weight: normal;
        font-style: normal;
      }
      * {
        font-family: 'DynamicFont' !important;
      }
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg && msg.type === "applyFont" && msg.data) {
      injectFont(msg.data);
    }
  });
})();
