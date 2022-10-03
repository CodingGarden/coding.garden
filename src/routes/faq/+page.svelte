<script>
	import { onMount } from 'svelte';
	import '@fontsource/bitter/400.css';

	function setHTML(html) {
		const app = document.querySelector('#faq');
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

	onMount(() => {
		if (localStorage.faqHTML) {
			setHTML(localStorage.faqHTML);
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
					setHTML(html);
				});
		}
	});

</script>

<div id="faq">
	<center>
		<p>Loading...</p>
		<p>
			If the page does not load, you can view the FAQs
			<a href="https://github.com/CodingGarden/faqs/">here</a>
		</p>
	</center>
</div>

<style>
	:global(*) {
		scroll-behavior: smooth;
	}
	:global(body) {
		font-size: 2rem;
		width: 100vw;
		margin: 0;
		padding: 0;
	}

	:global(#faq) {
		width: 80%;
		margin: 1rem auto;
	}

	:global(h1) {
		color: #d74e09;
	}

	:global(h2),
	:global(h3) {
		color: #f2bb05;
	}

	:global(p),
	:global(ul) {
		font-family: 'Bitter', serif;
	}
</style>
