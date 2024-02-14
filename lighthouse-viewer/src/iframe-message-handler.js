
window.addEventListener(
  "message",
  (event) => {
    console.log('received message', event);
    if (!(event.origin.endsWith('hlx.page')|| event.origin.endsWith('aem.page'))) return;
  },
  false,
);