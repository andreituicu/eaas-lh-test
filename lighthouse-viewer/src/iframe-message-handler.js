window.addEventListener(
  "message",
  (event) => {
    if (!(event.origin.endsWith('.hlx.page')|| event.origin.endsWith('.aem.page'))) return;
    if (event.data.type === 'lighthouse-report') {
      window.viewer._replaceReportHtml(event.data.report);
    }
  },
  false,
);

// we are in an iframe - let the parent know we are ready
if (window !== window.parent) {
  console.log('sending ready message');
  window.parent.postMessage({rendered: true}, '*');
} else {
  console.log('not in iframe');
}