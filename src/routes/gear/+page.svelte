<script>
	import '@fontsource/bitter/400.css';
	import { data } from './gear';
</script>

<h1 class="title">Coding Garden Gear</h1>
<p class="info">
	This is a list of all the gear I use to code and stream. You can support me by clicking the
	affiliate links on the right. The product links on the left are direct links to amazon and do not
	include affiliate info.
</p>
<p class="info">
	Click <a href="#stream-setup">here</a> to see a diagram of how the main components are hooked up.
</p>
<ul class="info">
	{#each data.gear as section, i}
		<li>
			<a href="#section-{i}">{section.title}</a>
		</li>
	{/each}
</ul>
{#each data.gear as section, i}
	<div id="section-{i}">
		<hr />
		<a class="info back-to-top" href="#app">Back to Top</a>
		<h2 class="title">{section.title}</h2>
		{#if section.description}
			<p class="info center">
				{@html section.description}
			</p>
		{/if}
		{#if section.sub_description}
			<small class="info center">{section.sub_description}</small>
		{/if}
		<div class="items">
			{#each section.items as item}
				<div class="item">
					<div class="inner">
						<h4 class="title">{item.title}</h4>
						<img class="image" src={item.image} alt={item.title} />
						<p class="description">{item.description}</p>
						{#if item.specs}
							<ul class="specs">
								{#each item.specs as spec}
									<li>{spec}</li>
								{/each}
							</ul>
						{/if}
					</div>
					<div class="buttons">
						{#if item.info_link}
							<div class="more-info-container">
								<a class="button" href={item.info_link} target="_blank" rel="noopener">More Info</a>
							</div>
						{/if}
						{#if item.link}
							<a class="button" href={item.link} target="_blank" rel="noopener">Direct Link</a>
						{/if}
						{#if item.affiliate_link}
							<a class="button" href={item.affiliate_link} target="_blank" rel="noopener"
								>Affiliate Link</a
							>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/each}

<h2 class="title">Stream Setup</h2>
<div id="stream-setup">
	<img src="/gear/stream-setup.png" alt="Stream Setup" />
</div>

<style>
	* {
		box-sizing: border-box;
	}

	#app {
		width: 100%;
	}

	.info {
		display: block;
		width: 80%;
		margin: 1rem auto;
		font-family: 'Bitter', serif;
	}

	.back-to-top {
		text-align: center;
	}

	.center {
		text-align: center;
	}

	.title {
		color: #f2bb05;
		text-align: center;
		font-variant: small-caps;
	}

	#stream-setup img {
		width: 90%;
		display: block;
		margin: 0 auto;
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		margin: 0 auto;
	}

	.item {
		width: calc(33% - 2rem);
		margin: 1rem;
		border: 5px solid white;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		position: relative;
	}

	.item .inner {
		padding: 0.5rem;
		text-align: center;
	}

	.item .inner .image {
		max-height: 250px;
		max-width: 450px;
	}

	.description {
		padding: 1rem;
		text-align: left;
		font-size: 1.5rem;
		font-family: 'Bitter', serif;
	}

	.buttons {
		font-size: 1.5rem;
		display: flex;
		justify-content: center;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
	}

	.more-info-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.specs {
		text-align: left;
	}

	a.button {
		display: inline-block;
		padding: 0.35em 1.2em;
		border: 0.1em solid #ffffff;
		margin: 0 0.3em 0.3em 0;
		border-radius: 0.12em;
		box-sizing: border-box;
		text-decoration: none;
		color: #6a9e3b;
		text-align: center;
		transition: all 0.2s;
		cursor: pointer;
		font-variant: small-caps;
	}

	a.button:hover {
		color: #000000;
		background-color: #ffffff;
	}

	@media all and (max-width: 30em) {
		a.button {
			display: block;
			margin: 0.4em auto;
		}
	}

	@media all and (max-width: 1750px) {
		.item {
			width: calc(50% - 2rem);
		}
		.item .inner .image {
			max-height: 200px;
		}
		.description {
			font-size: 1.75rem;
		}
	}

	@media all and (max-width: 1000px) {
		.item {
			width: calc(100%);
		}
		.item .inner .image {
			max-height: 200px;
		}
		.description {
			font-size: 2rem;
		}
	}
</style>
