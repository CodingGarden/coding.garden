<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	onMount(() => {
		const API_URL = 'https://coding-garden-videos.now.sh/videos';
		const formElement = document.querySelector('.form');
		const filterLinksElement = document.querySelector('.filter-links');
		const loadingElement = document.querySelector('#loading');
		const videosElement = document.querySelector('#videos');
		const filterInput = document.querySelector('#filter');

		let allVideos = localStorage.videos ? JSON.parse(localStorage.videos) : [];
		let videoElementsById = {};

		const filterLinks = [
			{
				label: 'Setting up a Mac for Web Development',
				filter: 'mac for'
			},
			'Intro to Git and Github',
			'Newby Tuesday',
			'Newb Quest',
			'Code Katas',
			'Higher Order Functions',
			'What is Application State?',
			'TypeScript',
			'React',
			'Vue',
			'Svelte',
			'Full Stack',
			'Node.js',
			'Mongo',
			'Postgres',
			'Chill Stream',
			'Throwback Thursday',
			'Morning Tea',
			'Afternoon Tea',
			'Meetup'
		];

		filterLinks.forEach((link) => {
			const linkElement = document.createElement('a');
			linkElement.textContent = link.label || link;
			linkElement.setAttribute('class', 'link');
			linkElement.href = `#/?filter=${link.filter || link}`;
			linkElement.addEventListener('click', (e) => {
				videosElement.scrollIntoView({
					behavior: 'smooth'
					// block:    "start" | "end",
				});
			});
			filterLinksElement.appendChild(linkElement);
		});

		formElement.addEventListener('submit', (e) => e.preventDefault());
		filterInput.addEventListener('input', filterList);

		if (window.location.hash) {
			filterInput.value = decodeURIComponent(window.location.hash.replace('#/?filter=', ''));
		}

		window.addEventListener('hashchange', (e) => {
			filterInput.value = decodeURIComponent(window.location.hash.replace('#/?filter=', ''));
			filterList({
				target: filterInput
			});
		});

		if (allVideos.length > 0) {
			showVideos(allVideos);
		}

		fetch(API_URL)
			.then((response) => response.json())
			.then(showVideos);

		function showVideos(videos) {
			localStorage.videos = JSON.stringify(videos);
			allVideos = videos;
			loadingElement.style.display = 'none';

			videosElement.innerHTML = '';
			videos.forEach((video) => {
				const videoElement = createVideoElement(video);
				videosElement.appendChild(videoElement);
			});
			filterList({
				target: filterInput
			});
		}

		function createVideoElement(video) {
			const colDiv = document.createElement('div');
			colDiv.className = 'col-xs-1 col-sm-6 col-md-4 video';
			videoElementsById[video.id] = colDiv;

			const link = document.createElement('a');
			link.setAttribute('target', '_blank');
			link.href = `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`;

			const videoElement = document.createElement('div');
			videoElement.className = 'card';

			const img = document.createElement('img');

			const imageRes =
				video.snippet.thumbnails.standard ||
				video.snippet.thumbnails.medium ||
				video.snippet.thumbnails.high;

			img.src = imageRes.url;
			img.className = 'card-img-top';

			videoElement.appendChild(img);

			const mediaBody = document.createElement('div');
			mediaBody.className = 'card-body';

			videoElement.appendChild(mediaBody);

			const h5 = document.createElement('h5');
			h5.className = 'card-title';
			h5.textContent = video.snippet.title;
			mediaBody.appendChild(h5);

			link.appendChild(videoElement);
			colDiv.appendChild(link);

			return colDiv;
		}

		function filterList(event) {
			const filter = event.target.value;
			window.location.hash = `#/?filter=${filter}`;
			if (allVideos) {
				const regExp = new RegExp(filter, 'gi');
				allVideos.forEach((video) => {
					if (video.snippet.title.match(regExp)) {
						videoElementsById[video.id].className = 'video video-show col-12 col-sm-6 col-md-4';
					} else {
						videoElementsById[video.id].className = 'video video-hide';
					}
				});
			}
		}
	});
</script>

<svelte:head>
	<title>Coding Garden Videos</title>
	<style>
		.card {
			--bs-card-spacer-y: 1rem;
			--bs-card-spacer-x: 1rem;
			--bs-card-title-spacer-y: 0.5rem;
			--bs-card-border-width: 1px;
			--bs-card-border-color: var(--bs-border-color-translucent);
			--bs-card-border-radius: 0.375rem;
			--bs-card-box-shadow: ;
			--bs-card-inner-border-radius: calc(0.375rem - 1px);
			--bs-card-cap-padding-y: 0.5rem;
			--bs-card-cap-padding-x: 1rem;
			--bs-card-cap-bg: rgba(0, 0, 0, 0.03);
			--bs-card-cap-color: ;
			--bs-card-height: ;
			--bs-card-color: ;
			--bs-card-bg: #fff;
			--bs-card-img-overlay-padding: 1rem;
			--bs-card-group-margin: 0.75rem;
			position: relative;
			display: flex;
			flex-direction: column;
			min-width: 0;
			height: var(--bs-card-height);
			word-wrap: break-word;
			background-color: var(--bs-card-bg);
			background-clip: border-box;
			border: var(--bs-card-border-width) solid var(--bs-card-border-color);
			border-radius: var(--bs-card-border-radius);
		}
		.card > hr {
			margin-right: 0;
			margin-left: 0;
		}
		.card > .list-group {
			border-top: inherit;
			border-bottom: inherit;
		}
		.card > .list-group:first-child {
			border-top-width: 0;
			border-top-left-radius: var(--bs-card-inner-border-radius);
			border-top-right-radius: var(--bs-card-inner-border-radius);
		}
		.card > .list-group:last-child {
			border-bottom-width: 0;
			border-bottom-right-radius: var(--bs-card-inner-border-radius);
			border-bottom-left-radius: var(--bs-card-inner-border-radius);
		}
		.card > .card-header + .list-group,
		.card > .list-group + .card-footer {
			border-top: 0;
		}

		.card-body {
			flex: 1 1 auto;
			padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
			color: var(--bs-card-color);
		}

		.card-title {
			margin-bottom: var(--bs-card-title-spacer-y);
		}

		.card-subtitle {
			margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
			margin-bottom: 0;
		}

		.card-text:last-child {
			margin-bottom: 0;
		}

		.card-link + .card-link {
			margin-left: var(--bs-card-spacer-x);
		}

		.card-header {
			padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
			margin-bottom: 0;
			color: var(--bs-card-cap-color);
			background-color: var(--bs-card-cap-bg);
			border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
		}
		.card-header:first-child {
			border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
		}

		.card-footer {
			padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
			color: var(--bs-card-cap-color);
			background-color: var(--bs-card-cap-bg);
			border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
		}
		.card-footer:last-child {
			border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
		}

		.card-header-tabs {
			margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
			margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
			margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
			border-bottom: 0;
		}
		.card-header-tabs .nav-link.active {
			background-color: var(--bs-card-bg);
			border-bottom-color: var(--bs-card-bg);
		}

		.card-header-pills {
			margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
			margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
		}

		.card-img-overlay {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			padding: var(--bs-card-img-overlay-padding);
			border-radius: var(--bs-card-inner-border-radius);
		}

		.card-img,
		.card-img-top,
		.card-img-bottom {
			width: 100%;
		}

		.card-img,
		.card-img-top {
			border-top-left-radius: var(--bs-card-inner-border-radius);
			border-top-right-radius: var(--bs-card-inner-border-radius);
		}

		.card-img,
		.card-img-bottom {
			border-bottom-right-radius: var(--bs-card-inner-border-radius);
			border-bottom-left-radius: var(--bs-card-inner-border-radius);
		}

		.card-group > .card {
			margin-bottom: var(--bs-card-group-margin);
		}
		@media (min-width: 576px) {
			.card-group {
				display: flex;
				flex-flow: row wrap;
			}
			.card-group > .card {
				flex: 1 0 0%;
				margin-bottom: 0;
			}
			.card-group > .card + .card {
				margin-left: 0;
				border-left: 0;
			}
			.card-group > .card:not(:last-child) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
			.card-group > .card:not(:last-child) .card-img-top,
			.card-group > .card:not(:last-child) .card-header {
				border-top-right-radius: 0;
			}
			.card-group > .card:not(:last-child) .card-img-bottom,
			.card-group > .card:not(:last-child) .card-footer {
				border-bottom-right-radius: 0;
			}
			.card-group > .card:not(:first-child) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			.card-group > .card:not(:first-child) .card-img-top,
			.card-group > .card:not(:first-child) .card-header {
				border-top-left-radius: 0;
			}
			.card-group > .card:not(:first-child) .card-img-bottom,
			.card-group > .card:not(:first-child) .card-footer {
				border-bottom-left-radius: 0;
			}
		}
	</style>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap-grid.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap-utilities.min.css"
	/>
</svelte:head>

<main>
	<h1 class="title">Coding Garden Videos</h1>
	<div class="filter-links" />
</main>
<div class="form">
	<label for="filter">Search</label>
	<input type="text" id="filter" />
</div>
<div id="loading">
	<h3>Loading...</h3>
	<video src="https://cdn.flixel.com/flixel/vg5u60m126u7qydd3e9i.phone.mp4" loop autoplay />
</div>
<section class="row" id="videos" />

<style>
	:global(.video) {
		transition: height 0.5s, width 0.5s, visibility 0s, opacity 0.5s linear;
	}

	:global(.video-show) {
		opacity: 1;
		visibility: visible;
	}

	:global(.video-hide) {
		visibility: hidden !important;
		opacity: 0 !important;
		width: 0px !important;
		height: 0px !important;
		padding-right: 0px !important;
		padding-left: 0px !important;
		margin-top: 0px !important;
	}

	:global(.title),
	:global(#loading) {
		text-align: center;
	}

	:global(video) {
		width: 100%;
	}

	:global(a) {
		color: white;
	}

	:global(a:hover) {
		color: #6a9e3b;
	}

	:global(.form) {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 1rem;
	}

	:global(.form input) {
		width: 80%;
	}

	:global(.filter-links) {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	:global(.link) {
		outline: 1px solid white;
		margin: 0.5em;
		font-size: 1rem;
		padding: 0.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	:global(h1.title) {
		margin-top: 1rem;
		color: #7a8a7d;
		margin-bottom: 3rem;
	}

	:global(div.filter-links) {
		align-items: flex-start;
		justify-content: flex-start;
		margin-right: 5rem;
		border-left: 3px solid lime;
		padding-left: 1rem;
	}

	:global(div.filter-links a.link) {
		transition: outline 0.3s, color 0.3s;
		padding: 0.45rem 1rem;
	}

	:global(div.filter-links a.link) {
		border: 1px solid #4a4a4a;
		outline: none;
		color: #aeaeae;
		border-radius: 0.3rem;
		transition: border 0.3s, color 0.3s;
	}

	:global(div.filter-links a.link:hover) {
		text-decoration: none;
		color: white;
		border-color: #959595;
	}

	:global(div.video.video-show) {
		padding: 1rem;
	}

	:global(div.video.video-show a) {
		text-decoration: none;
		color: white;
	}

	:global(div.video.video-show .card) {
		height: auto;
		border-radius: 0.5rem;
		overflow: hidden;
		border: 1px solid #4a4a4a;
		background-color: #222;
		transition: background, border 0.3s;
	}

	:global(div.video.video-show .card:hover) {
		border-color: #959595;
	}

	:global(div.video.video-show .card h5) {
		font-size: 1.3rem;
	}

	:global(div.video.video-show .card .card-img-top) {
		opacity: 1;
		transition: opacity 0.3s;
	}

	:global(div.video.video-show .card:hover .card-img-top) {
		opacity: 0.8;
	}

	:global(input#filter) {
		width: calc(100% - 2rem);
		margin: 1rem 1rem;
		margin-top: 0;
		box-sizing: border-box;
		outline: none;
		background-color: #222;
		border: 1px solid #4a4a4a;
		border-radius: 0.5rem;
		transition: border 0.3s;
		padding: 0.2rem 0.5rem;
		font-size: 1.2rem;
		color: white;
	}

	:global(input#filter:focus) {
		border-color: #959595;
	}

	:global(label[for='filter']) {
		color: white;
		margin: 1rem;
		margin-bottom: 0;
		margin-top: 3rem;
		padding-bottom: 0.2rem;
		font-size: 1.2rem;
	}

	:global(section#videos) {
		margin: 0;
	}

	@media (min-width: 1400px) {
		:global(section#videos) {
			margin: 0 15rem;
		}

		:global(label[for='filter']) {
			margin-left: 16rem;
			margin-right: 16rem;
		}

		:global(input#filter) {
			margin-left: 16rem;
			margin-right: 16rem;
			width: calc(100% - 32rem);
		}

		:global(div.filter-links) {
			padding-left: 15rem;
			margin-right: 15rem;
		}
	}
</style>
