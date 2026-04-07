document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("fontFile");

  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const dataUrl = reader.result; // "data:font/woff2;base64,...."
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (!tabs || !tabs[0]) return;
        chrome.tabs.sendMessage(tabs[0].id, {
          type: "applyFont",
          data: dataUrl
        });
      });
    };

    reader.readAsDataURL(file);
  });
});
