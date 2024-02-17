<script>
	import '@fontsource/bitter/400.css';
	
	// <a target="_blank" rel="noopener" href="
	const faqs = [
		{ Q: 'Who do you work for?', A: '<a target="_blank" rel="noopener" href="https://syntax.fm/">Syntax</a> was acquired by <a target="_blank" rel="noopener" href="https://sentry.io">Sentry</a> in <a target="_blank" rel="noopener" href="https://blog.sentry.io/syntax-sentry-mmxxiii/">April 2023</a>, so I work for Sentry and I am on the Syntax team.' },
		{ Q: 'What is Syntax?', A: 'Hosted by <a target="_blank" rel="noopener" href="https://twitter.com/wesbos">Wes Bos</a> and <a target="_blank" rel="noopener" href="https://twitter.com/stolinski">Scott Tolinski</a>, it is the biggest and best web development focused podcast out there. They have published over 700 episodes since 2017. They have recently started <a target="_blank" rel="noopener" href="https://syntax.fm/about">expanding their team</a> and are also publishing the podcast <a target="_blank" rel="noopener" href="https://www.youtube.com/playlist?list=PLLnpHn493BHHNUfHN5lDf11UD8jQ5Bpzl">as videos</a> now.' },
		{
			Q: 'Will you be on the Syntax podcast?',
			A: 'Only a few times a year. My main focus will be making videos.'
		},
		{
			Q: 'What is your job at Syntax?',
			A: 'My title is Senior Creator (Video). I will be working full time to create videos for the <a target="_blank" rel="noopener" href="https://www.youtube.com/@syntaxfm">Syntax YouTube channel</a> and <a target="_blank" rel="noopener" href="https://syntax.fm/links">other social platforms</a>. I\'ll be making expansions to their video content with new series and deep dives into topics covered on the podcast.'
		},
		{
			Q: 'Will the videos you make for Syntax be pre-recorded or live?',
			A: 'They will be pre-recorded and edited. There is potential for live streams down the road.'
		},
		{
			Q: 'What will happen to the Coding Garden?',
			A: 'There will be less frequent live streams and videos while I settle in and find a cadence at work.'
		},
		{
			Q: 'Will there be regular streams on the Coding Garden channel?',
			A: 'Not for now. Once I settle in at work and figure out my schedule (and energy levels), I will pick either mornings before work or evenings after work to stream at least once a week.'
		},
		{
			Q: 'What will happen to Try Day Friday?',
			A: 'For now, it is paused. I will return to this format occasionally in the future.'
		},
		{
			Q: 'When will you finish / deploy listd?',
			A: 'This will be my main focus when I find the time to stream on Coding Garden. The <a target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=flIiOCN595A">co-working stream</a> we tried seemed to work well, so this is a likely path forward. When I have a chance to work on it, I\'ll do it in this style and then summarize and review the code I wrote during the co-working session.'
		},
		{
			Q: 'What will happen to Coding Garden Twitch subscriptions, YouTube channel memberships, Github Sponsorships and Patreon?',
			A: 'I will leave these enabled for now. Like was mentioned above, Coding Garden channel content will be less frequent, so it\'s up to you if you\'d like to continue supporting me monetarily.'
		},
	];
</script>

<svelte:head>
	<meta name="syntax" content="Syntax" />
</svelte:head>
<div class="syntax">
	<h1>Coding Garden + Syntax FAQs</h1>
	<ul>
		{#each faqs as faq, index}
			<li><a href="#faq-{index}">{faq.Q}</a></li>
		{/each}
	</ul>
	{#each faqs as faq, index}
		<h2 id="faq-{index}">{faq.Q}</h2>
		<p>{@html faq.A}</p>
	{/each}
</div>

<style>
	.syntax {
		font-size: 2rem;
		width: 80%;
		margin: 1rem auto;
		scroll-behavior: smooth;
	}

	h1 {
		color: #d74e09;
	}

	h2,
	h3 {
		color: #f2bb05;
	}

	p,
	ul {
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
</style>
