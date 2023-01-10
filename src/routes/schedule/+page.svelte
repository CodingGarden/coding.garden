<script>
	import '@fontsource/bitter/400.css';
	import { onMount } from 'svelte';
	import '@fullcalendar/core/vdom';
	import { Calendar } from '@fullcalendar/core';
	import bootstrap5Plugin from '@fullcalendar/bootstrap5';
	import timeGridPlugin from '@fullcalendar/timegrid';
	import iCalendarPlugin from '@fullcalendar/icalendar';

	let src = '';
	let calendarElement = null;
	onMount(() => {
		if (calendarElement) {
			const calendar = new Calendar(calendarElement, {
				plugins: [timeGridPlugin, iCalendarPlugin, bootstrap5Plugin],
				themeSystem: 'bootstrap5',
				initialView: 'timeGridWeek',
				nowIndicator: true,
				events: {
					url: 'https://coding-garden-calendar.vercel.app/api/ics',
					format: 'ics'
				}
			});
			calendar.render();
		}
	});
</script>

<svelte:head>
	<title>Coding Garden Calendar</title>
	<meta
		name="description"
		content="Livestream schedule."
	/>
	<link
		href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css'
		rel='stylesheet'
	/>
	<link
		rel="stylesheet"
		href="https://bootswatch.com/5/cyborg/bootstrap.min.css"
	/>
</svelte:head>

<div id="app">
	<div class="info">
		<p>Here are the upcoming Coding Garden live streams.</p>
		<p>Add it to your calendar: https://cdg.sh/ics</p>
	</div>
</div>
<div class="calendar-wrapper">
	<div class="calendar" bind:this={calendarElement} id="calendar" />
</div>

<style>
	* {
		scroll-behavior: smooth;
	}

	:root {
		--fc-now-indicator-color: #56BC58;
		--fc-event-bg-color: #29662A;
		--fc-today-bg-color: rgba(188, 232, 241, 0.3);
		--bs-btn-disabled-bg: #56BC58;
		--bs-btn-disabled-border-color: #56BC58;
	}

	:global(.fc .fc-timegrid-now-indicator-line) { border-width: 5px 0 0; }

	#app {
		width: 80%;
		margin: 1rem auto;
	}

	.info p {
		color: white;
		font-size: 2.5rem;
		text-align: center;
		font-family: 'Bitter', serif;
	}

	.calendar-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.calendar {
		width: 80%;
	}
</style>
