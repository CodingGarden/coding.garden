<script>
	import '@fontsource/bitter/400.css';
	let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
	let cal = 'fdjrq4spg16jkpg6ahg41v3510%40group.calendar.google.com';
	const src = `https://calendar.google.com/calendar/embed?mode=week&src=${cal}&ctz=${tz}`;
</script>

<svelte:head>
	<title>Coding Garden Calendar</title>
</svelte:head>

<div id="app">
	<center>
		<p>Here are the upcoming Coding Garden live streams.</p>
		<p>Add it to your calendar: https://cdg.sh/ics</p>
	</center>
</div>
<center>
	<iframe {src} title="CodingGarden Schedule" frameborder="0" />
</center>

<style>
	* {
		scroll-behavior: smooth;
	}

	#app {
		width: 80%;
		margin: 1rem auto;
	}

	p {
		font-family: 'Bitter', serif;
	}

	iframe {
		margin: 0 auto;
		width: 90vw;
		height: 70vh;
	}
</style>
