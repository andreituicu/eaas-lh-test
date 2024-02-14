
// window.addEventListener(
//   "message",
//   (event) => {
//     console.log('received message', event);
//     if (!(event.origin.endsWith('hlx.page')|| event.origin.endsWith('aem.page'))) return;
//     if (event.data.type === 'lighthouse-report') {
//       let psiReportBlob = new Blob([JSON.stringify(event.data.report)], {type: "application/json"});

//     }
//   },
//   false,
// );