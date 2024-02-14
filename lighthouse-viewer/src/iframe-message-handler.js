
window.addEventListener(
  "message",
  (event) => {
    console.log('received message', event);
    if (!(event.origin.endsWith('hlx.page')|| event.origin.endsWith('aem.page'))) return;
    if (event.data.type === 'lighthouse-report' && !location.href.includes('jsonurl')) {
      let psiReportBlob = new Blob([JSON.stringify(event.data.report)], {type: "application/json"});
      console.log(event.data.report);
      let psiReportBlobUrl = URL.createObjectURL(psiReportBlob);
      console.log('psiReportBlobUrl', psiReportBlobUrl);
      console.log(document);
      console.log('location.href', location.href);
      location.href = `${location.href}?jsonurl=${psiReportBlobUrl}`;
    }
  },
  false,
);