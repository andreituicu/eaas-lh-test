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