window.addEventListener(
  "message",
  (event) => {
    console.log(event);
    console.log(event.source === window.parent);
    if (!(event.origin.endsWith('.hlx.page')|| event.origin.endsWith('.aem.page'))) return;
    if (event.data.type === 'lighthouse-report') {
      window.viewer._replaceReportHtml(event.data.report);
    }
  },
  false,
);

// we are in an iframe - let the parent know we are ready
if (window !== window.parent) {
  window.parent.postMessage({opened: true}, '*');
}