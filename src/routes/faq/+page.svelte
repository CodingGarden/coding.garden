<script>
	import { onMount } from 'svelte';
	import '@fontsource/bitter/400.css';

	let parent;

	class Faq extends HTMLElement {
		constructor() {
			super();
			console.log('creating instance...');
			if (!this.shadowRoot) {
				this.attachShadow({ mode: 'open' });
			}
			this.element = document.createElement('div');
			this.element.innerHTML = `
			<center>
				<p>Loading...</p>
				<p>
					If the page does not load, you can view the FAQs
					<a href="https://github.com/CodingGarden/faqs/">here</a>
				</p>
			</center>`;
			const style = document.createElement('style');
			style.textContent = this.styles;
			this.shadowRoot?.append(style, this.element);
			window.addEventListener(
				'hashchange',
				this.scrollHash.bind(this),
				false
			);
		}

		scrollHash() {
			const hash = location.hash.substr(1);
			if (!hash) return;
			const id = '#' + hash;
			if (this.element) {
				let targetElement = this.element.querySelector(id);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: "smooth" });
				}
			}
		}

		onMount() {
			if (localStorage.faqHTML) {
				this.setHTML(localStorage.faqHTML);
			} else {
				const url = 'https://api.github.com/repos/CodingGarden/faqs/contents/README.md?ref=master';
				fetch(url, {
					headers: {
						accept: 'application/vnd.github.v3.html+json'
					}
				})
					.then((result) => result.text())
					.then((html) => {
						localStorage.faqHTML = html;
						this.setHTML(html);
					});
			}
		}

		setHTML(html) {
			this.element.classList.add('faq');
			this.element.innerHTML = html;
			this.element.querySelectorAll('a').forEach((link) => {
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
			this.scrollHash();
		}

		get styles() {
			return `
			* {
      scroll-behavior: smooth;
			}

			.faq {
				font-size: 2rem;
				width: 80%;
				margin: 1rem auto;
			}

			h1 {
				color: #D74E09;
			}

			h2, h3 {
				color: #F2BB05;
			}

			p, ul {
				font-family: 'Bitter', serif;
			}
			a {
				color: #6a9e3b;
				text-decoration: none;
			}

			a:hover {
				text-decoration: underline;
			}

			a:visited {
				color: #6a9e3b;
			}
			`;
		}
	}

	onMount(() => {
		const element = document.createElement('cg-faq');
		element.onMount();
		parent.append(element);
	});

	customElements.define('cg-faq', Faq);
</script>

<div id="faq" bind:this={parent} />
