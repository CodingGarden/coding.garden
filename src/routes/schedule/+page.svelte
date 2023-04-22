<script>
	import '@fontsource/bitter/400.css';
	import { onMount } from 'svelte';
	let src = '';
	onMount(() => {
		let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
		let cal = 'fdjrq4spg16jkpg6ahg41v3510%40group.calendar.google.com';
		src = `https://calendar.google.com/calendar/embed?mode=week&src=${cal}&ctz=${tz}`;
	});
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

<!-- <script>
	import '@fontsource/bitter/400.css';
	import { onMount } from 'svelte';
	import '@fullcalendar/core/vdom';
	import { Calendar } from '@fullcalendar/core';
	import bootstrap5Plugin from '@fullcalendar/bootstrap5';
	import listPlugin from '@fullcalendar/list';
	import timeGridPlugin from '@fullcalendar/timegrid';
	import iCalendarPlugin from '@fullcalendar/icalendar';
	import ical from 'ical';

	let src = '';
	let calendarElement = null;
	let loading = false;
	let iCalEvents = null;
	onMount(() => {
		if (calendarElement) {
			const today = new Date();
			const maxWidth = 900;
			const calendar = new Calendar(calendarElement, {
				plugins: [timeGridPlugin, listPlugin, iCalendarPlugin, bootstrap5Plugin],
				themeSystem: 'bootstrap5',
				initialView: window.innerWidth <= maxWidth ? 'listWeek' : 'timeGridWeek',
				nowIndicator: true,
				scrollTime: `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`,
				events: {
					url: 'https://coding-garden-calendar.vercel.app/api/ics',
					format: 'ics'
				},
				headerToolbar: {
					left: 'prev,today,next',
					center: 'title',
					right: 'timeGridDay,listWeek,timeGridWeek'
				},
				buttonText: {
					today:    'Today',
					month:    'Month',
					week:     'Week',
					day:      'Day',
					list:     'List'
				},
				loading(isLoading) {
					loading = isLoading;
				},
				eventSourceSuccess(content, response) {
					iCalEvents = Object.values(ical.parseICS(response.response));
				},
				eventClick(info) {
					// TODO: find oringal event ID to open details
					// const eventID = bota(event id without @google space calendarid@g)
					// 1sall03d2k218abnjimeiir04e fdjrq4spg16jkpg6ahg41v3510@g
					// https://calendar.google.com/calendar/u/0/r/eventedit/copy/MXNhbGwwM2QyazIxOGFibmppbWVpaXIwNGUgZmRqcnE0c3BnMTZqa3BnNmFoZzQxdjM1MTBAZw
				}
			});
			calendar.render();
			window.addEventListener('resize', () => {
				calendar.changeView(window.innerWidth <= maxWidth ? 'listWeek' : 'timeGridWeek');
			});
		}
	});
</script>

<svelte:head>
	<title>Coding Garden Calendar</title>
	<meta name="description" content="Livestream schedule." />
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
		rel="stylesheet"
	/>
</svelte:head>

<div id="app">
	<div class="info">
		<p>Here are the upcoming Coding Garden live streams.</p>
		<p>Add it to your calendar: https://cdg.sh/ics</p>
		{#if loading}
			<div class="loading-container">
				<p>Loading events...</p>
				<div class="lds-dual-ring" />
			</div>
		{/if}
	</div>
	<div class="calendar-wrapper">
		<div class="calendar" bind:this={calendarElement} id="calendar" />
	</div>
</div>

<style>
	@import url(https://bootswatch.com/5/cyborg/bootstrap.min.css);

	* {
		scroll-behavior: smooth;
	}

	:global(:root) {
		--cg-green: #56bc58;
		--cg-hover-green: #29662a;
		--fc-now-indicator-color: var(--cg-green);
		--fc-event-bg-color: #29662a;
		--fc-today-bg-color: rgba(188, 232, 241, 0.3);
		--bs-btn-disabled-bg: var(--cg-green);
		--bs-btn-disabled-border-color: var(--cg-green);
		--bs-btn-hover-bg: var(--cg-green);
		--bs-btn-hover-border-color: var(--cg-green);
		--bs-btn-disabled-bg: var(--cg-green);
		--bs-btn-disabled-border-color: var(--cg-green);
	}

	:global(.btn-primary) {
		background-color: var(--cg-green);
		--bs-btn-color: #fff;
		--bs-btn-bg: var(--cg-green);
		--bs-btn-border-color: var(--cg-green);
		--bs-btn-hover-color: #fff;
		--bs-btn-hover-bg: var(--cg-hover-green);
		--bs-btn-hover-border-color: var(--cg-hover-green);
		--bs-btn-focus-shadow-rgb: 74,173,220;
		--bs-btn-active-color: #fff;
		--bs-btn-active-bg: var(--cg-hover-green);
		--bs-btn-active-border-color: var(--cg-hover-green);
		--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
		--bs-btn-disabled-color: #fff;
		--bs-btn-disabled-bg: var(--cg-green);
		--bs-btn-disabled-border-color: var(--cg-green);
	}

	:global(.fc .fc-timegrid-now-indicator-line) {
		border-width: 5px 0 0;
	}

	@media only screen and (max-width: 720px) {
		:global(.fc-header-toolbar.fc-toolbar) {
			flex-direction: column;
			gap: 0.5rem;
		}
	}

	:global(.fc-theme-bootstrap5-shaded) {
		background-color: black;
	}

	:global(.fc .fc-list-event:hover td) {
		background-color: var(--bs-gray-700);
	}

	#app {
		width: 80%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.info {
		margin-top: 1rem;
	}

	.info p {
		color: white;
		font-size: min(2.5rem, 4vw);
		text-align: center;
		font-family: 'Bitter', serif;
	}

	.calendar-wrapper {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.calendar {
		width: 80%;
		margin-bottom: 1rem;
	}

	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.lds-dual-ring {
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	.lds-dual-ring:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style> -->
