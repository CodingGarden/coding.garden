<script>
  import { fade } from 'svelte/transition';
  import Parens from './logos/Parens.svelte';
  import Curly from './logos/Curly.svelte';
  import Square from './logos/Square.svelte';

  let visible = false;

  setTimeout(() => visible = true);
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 98vh;
  overflow: auto;
  font-family: 'Share Tech Mono', monospace;
  text-align: center;
  font-size: 1.5rem;
}

.title {
  font-size: 22vmin;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Share Tech Mono', monospace;
}

.logos {
  display: flex;
  justify-content: center;
}

.logo {
  width: 25vmin;
}

a,
a:visited {
  color: #56BC58;
}

#codes div {
  font-size: 3vw;
}

.overlay {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.tiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.tile {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tile:hover {
  cursor: pointer;
  border: 1px solid white;
}
</style>

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
    {/if}
  </div>
  <div class="overlay">
    <div class="info">
      <h1>CODING GARDEN</h1>
      <p class="tagline">Grow your coding skills one day at a time.</p>
      <p class="tagline">
        <a href="https://www.youtube.com/c/CodingGardenWithCJ">Visit Coding Garden on YouTube</a>
      </p>
      <p class="tagline">Follow @Coding_Garden
        <a href="https://twitter.com/coding_garden">on Twitter</a> for the latest updates.
      </p>
      <p class="tagline">
        Search / filter my videos <a href="/videos">here</a>.
      </p>
      <p class="tagline">
        <a href="/support">Support Coding Garden</a> with donations, patreon and stickers
      </p>
      <p class="tagline">
        <a href="/gear">View the gear I use to stream here</a>
      </p>
    </div>
  </div>
</main>