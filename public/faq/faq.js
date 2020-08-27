function setHTML(html) {
  const app = document.querySelector('#app');
  app.innerHTML = html;
  app.querySelectorAll('a').forEach((link) => {
    if (link.href.endsWith('OVERLAYS_CHAT_MANAGER.md')) {
      link.href = 'https://github.com/CodingGarden/faqs/blob/master/OVERLAYS_CHAT_MANAGER.md';
    }

    if (link.href.includes('#')) {
      link.href = link.href.replace('#', '#user-content-');
    } else {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
  });
}

if (localStorage.faqHTML) {
  setHTML(localStorage.faqHTML);
} else {
  const url = 'https://api.github.com/repos/CodingGarden/faqs/contents/README.md?ref=master';
  fetch(url, {
    headers: {
      accept: 'application/vnd.github.v3.html+json',
    },
  })
    .then((result) => result.text())
    .then((html) => {
      localStorage.faqHTML = html;
      setHTML(html);
    });
}
