<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Parens from '$lib/logos/Parens.svelte';
	import Curly from '$lib/logos/Curly.svelte';
	import Square from '$lib/logos/Square.svelte';
	import links from '$lib/links';

	let visible = false;
	let linkVisible = false;

	onMount(() => {
		visible = true;
		linkVisible = true;
	});
</script>

<main class="main">
	<div>
		{#if visible}
			<div class="logos">
				<div class="logo">
					<Parens />
				</div>
				<div class="logo">
					<Curly />
				</div>
				<div class="logo">
					<Square />
				</div>
			</div>
		{:else}
			<!-- Workaround to avoid layout shift -->
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 1080 1080"
				style="enable-background:new 0 0 1080 1080;"
				xml:space="preserve"
			>
				<g id="Layer_9">
					<rect width="1080" height="1080" />
				</g>
				<g id="Layer_10" />
				<g id="Layer_11" class="st0">
					<circle class="st1" cx="540" cy="540" r="540" />
				</g>
			</svg>
		{/if}
	</div>
	<div class="overlay">
		<div class="info">
			<h1>CODING GARDEN</h1>
			<h2>Grow your coding skills one day at a time.</h2>
			<div class="link-list">
				{#each links as link}
					{#if linkVisible}
						<a
							target={link.href.startsWith('https') ? '_blank' : '_self'}
							rel="noopener noreferrer"
							aria-atomic="true"
							href={link.href}
							transition:fly={{ y: 200, duration: 1000 }}
						>
							<img alt={link.img_alt} src={link.img_url} />
							<span>{link.label}</span>
						</a>
					{/if}
				{/each}
			</div>
			<p class="tagline privacy-policy">
				<a class="no-color-link" target="_blank" rel="noreferrer noopener" href="/privacy-policy"
					>View the Privacy Policy here.</a
				>
			</p>
		</div>
	</div>
</main>

<style>
	.main {
		display: flex;
		flex-direction: column;
		height: 98vh;
		overflow-y: auto;
		overflow-x: hidden;
		font-family: 'GlacialIndifference-Bold', sans-serif;
		text-align: center;
		font-size: 1.5rem;
	}

	.logos {
		display: flex;
		justify-content: center;
		flex-direction: row;
	}

	.logo {
		width: 25vmin;
	}

	a,
	a:visited {
		color: #56bc58;
	}

	h1 {
		margin: 1rem auto 2rem auto;
		animation: fadein 2000ms ease-in-out;
	}

	h2 {
		font-size: 1.5rem;
		max-width: 800px;
		margin: 0 auto 3rem auto;
		animation: fadein 3000ms ease-in-out;
	}

	.link-list {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-wrap: wrap;
		margin: 1rem auto;
		max-width: 900px;
	}

	.link-list a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33.3%;
		transition: color 600ms linear;
	}

	@media (max-width: 768px) {
		.link-list a {
			width: 50%;
		}

		.link-list a img {
			width: 80%;
		}
	}

	.link-list a img {
		z-index: -1;
		max-width: 242px;
		transition-duration: 500ms;
	}

	.link-list a:hover {
		text-decoration: none;
		color: #f2bb05;
	}

	.link-list a:hover img {
		transform: scale(1.2);
	}

	.overlay {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.privacy-policy {
		margin: 3rem auto 0 auto;
		font-size: 1rem;
		font-style: italic;
		max-width: 800px;
		padding: 1rem;
	}

	.no-color-link {
		color: #ffffff;
		text-decoration: solid 1px underline #ffffff;
		text-underline-offset: 0.5rem;
	}

	.no-color-link:visited {
		color: #ffffff;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
