
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

async function loadCSS(href) {
  return new Promise((resolve, reject) => {
    if (!document.querySelector(`head > link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.append(link);
    } else {
      resolve();
    }
  });
}

async function loadLighouseViewer() {
  if (!window.location.host.endsWith('.hlx.page')) {
    window.location = '/404.html';
  }

  const { origin } = new URL(import.meta.url);
  await loadCSS(new URL('/psi/boostrap.css', origin).toString());

  const iframe = document.createElement('iframe');
  // this would be https://psi.experiencecloud.live
  const iframeOrigin = 'https://local-viewer--eaas-lh-test--andreituicu.hlx.page';
  // this would be https://psi.experiencecloud.live/viewer/
  iframe.src = `${iframeOrigin}/lighthouse-viewer/index.html`;
  document.querySelector('body').appendChild(iframe);

  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get('jsonurl')) {
    const psiReportPath = searchParams.get('jsonurl');
    const psiReport = await fetchAPI(psiReportPath);

    iframe.onload = function () {
      iframe.contentWindow.postMessage(
        {
          report: psiReport,
          type: 'lighthouse-report',
        },
        iframeOrigin,
      );
    };
  }
}

loadLighouseViewer();