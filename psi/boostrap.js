
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

window.addEventListener(
  "message",
  (event) => {
    console.log('received message', event);
  },
);

async function loadLighouseViewer() {
  if (!window.location.host.endsWith('.hlx.page')) {
    window.location = '/404.html';
  }

  const iframe = document.createElement('iframe');
  const iframeOrigin = 'https://local-viewer--eaas-lh-test--andreituicu.hlx.page';
  iframe.src = `${iframeOrigin}/lighthouse-viewer/index.html`;
  iframe.style.cssText = "overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px";
  document.querySelector('body').appendChild(iframe);

  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get('jsonurl')) {
    const psiReportPath = searchParams.get('jsonurl');
    const psiReport = await fetchAPI(psiReportPath);

    // iframe.onload = function () {
    //   iframe.contentWindow.postMessage(
    //     {
    //       lhr: psiReport, 
    //     },
    //     iframeOrigin,
    //   );
    // };
  }
}

loadLighouseViewer();