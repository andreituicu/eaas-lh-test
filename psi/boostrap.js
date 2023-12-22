
async function fetchAPI(path) {
  const response = await fetch(path);
  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error('error loading API response', response);
    return null;
  }
  const json = await response.json();
  if (!json) {
    // eslint-disable-next-line no-console
    console.error('empty API response', path);
    return null;
  }
  return json;
}

async function loadLighouseViewer() {
  if (!window.location.domain.endsWith('.hlx.page')) {
    window.location = '/404.html';
  }

  const searchParams = new URLSearchParams(window.location.search);
  const psiReportPath = searchParams.get('jsonurl');
  const psiReport = await fetchAPI(psiReportPath);

  var psiReportBlob = new Blob([JSON.stringify(psiReport)], {type: "application/json"});
  var psiReportBlobUrl  = URL.createObjectURL(psiReportBlob);

  const iframe = document.createElement('iframe');
  iframe.src = psiReportBlobUrl;
  document.querySelector('body').appendChild(iframe);
}

loadLighouseViewer();