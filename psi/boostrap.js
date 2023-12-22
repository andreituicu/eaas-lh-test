
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
    const link = document.createElement('a');
    link.href = viewerUrl.toString();
    link.textContent = 'test';
    document.querySelector('body').appendChild(link);
  }

  iframe.src = viewerUrl.toString();
  iframe.style.cssText = "overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px";
  document.querySelector('body').appendChild(iframe);
}

loadLighouseViewer();