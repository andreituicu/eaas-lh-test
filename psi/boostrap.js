
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
  if (!window.location.host.endsWith('.hlx.page')) {
    window.location = '/404.html';
  }

  const iframe = document.createElement('iframe');
  const viewerUrl = new URL('https://googlechrome.github.io/lighthouse/viewer/');
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.get('jsonurl')) {
    const psiReportPath = searchParams.get('jsonurl');
    const psiReport = await fetchAPI(psiReportPath);

    var psiReportBlob = new Blob([JSON.stringify(psiReport)], {type: "application/json"});
    var psiReportBlobUrl  = URL.createObjectURL(psiReportBlob);

    viewerUrl.searchParams.set('jsonurl', psiReportBlobUrl);
  }

  iframe.src = viewerUrl;
  document.querySelector('body').appendChild(iframe);
}

loadLighouseViewer();