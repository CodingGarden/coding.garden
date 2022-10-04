<script>
	import Parens from '$lib/logos/Parens.svelte';
	import Curly from '$lib/logos/Curly.svelte';
	import Square from '$lib/logos/Square.svelte';

	let visible = false;

	setTimeout(() => (visible = true));
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
				<a target="_blank" rel="noreferrer noopener" href="https://twitch.tv/codinggarden">
					<img alt="twitch-logo" src="/images/twitch.png">
					Follow on Twitch
				</a>
				<a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/c/CodingGarden">
					<img alt="youtube-logo" src="/images/youtube.png">
					Subscribe on YouTube
				</a>
				<a target="_blank" rel="noreferrer noopener" href="https://twitter.com/coding_garden">
					<img alt="twitter-logo" src="/images/twitter.png">
					Follow on Twitter
				</a>
				<a target="_blank" rel="noreferrer noopener" href="https://github.com/CodingGarden">
					<img alt="github-logo" src="/images/github.png">
					Follow on Github
				</a>
				<a target="_blank" rel="noreferrer noopener" href="/discord">
					<img alt="discord-logo" src="/images/discord.png">
					Join the Discord
				</a>
				<a target="_blank" rel="noreferrer noopener" href="/faq">
					<img alt="faq-logo" src="/images/faq.png">
					Read the Frequently Asked Questions
				</a>
				<a target="_blank" rel="noreferrer noopener" href="https://vox.coding.garden">
					<img alt="vox-logo" src="/images/vox.png">
					Ask questions to be answered LIVE on stream
				</a>
				<a target="_blank" rel="noreferrer noopener" href="https://list.coding.garden">
					<img alt="mail-logo" src="/images/mail.png">
					Subscribe to the mailing list for weekly updates and live stream notifications
				</a>
				<a target="_blank" rel="noreferrer noopener" href="/videos">
					<img alt="videos-logo" src="/images/tv.png">
					Search across all videos
				</a>
				<a target="_blank" rel="noreferrer noopener" href="/support">
					<img alt="support-logo" src="/images/support.png">
					Show your support with donations and merch
				</a>
				<a target="_blank" rel="noreferrer noopener" href="/gear">
					<img alt="gear-logo" src="/images/gear.png">
					View the gear used to stream
				</a>
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
		overflow: auto;
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
	}

	h2 {
		font-size: 1.5rem;
		max-width: 800px;
		margin: 0 auto 3rem auto;
	}

	.link-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, 400px);
		place-content: center;
		gap: 4rem;
		margin: 1rem;
	}

	.link-list a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition-duration: 500ms;
	}

	.link-list a:hover {
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
</style>
