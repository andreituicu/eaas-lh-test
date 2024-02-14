
window.addEventListener(
  "message",
  (event) => {
    if (!(event.origin.endsWith('hlx.page')|| event.origin.endsWith('aem.page'))) return;
    console.log(event);
  },
  false,
);