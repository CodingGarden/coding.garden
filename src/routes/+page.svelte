<script>
  import { fade } from "svelte/transition";
  import Parens from "$lib/logos/Parens.svelte";
  import Curly from "$lib/logos/Curly.svelte";
  import Square from "$lib/logos/Square.svelte";

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
        <a href="https://twitch.tv/codinggarden"
          >Visit Coding Garden on Twitch</a
        >
        <a href="https://www.youtube.com/c/CodingGarden"
          >Visit Coding Garden on YouTube</a
        >
        <a href="https://twitter.com/coding_garden"
          >Follow @Coding_Garden on Twitter for the latest updates</a
        >
        <a href="https://vox.coding.garden">
          Ask questions for CJ to answer LIVE on stream</a
        >
        <a href="/videos">Search for videos here</a>
        <a href="/support"
          >Support Coding Garden with donations, patreon and stickers here</a
        >
        <a href="/gear">View the gear used to stream here</a>
      </div>
      <p class="tagline privacy-policy">
        <a class="no-color-link" href="/privacy-policy"
          >View the Coding Garden Privacy Policy here.</a
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
    font-family: "GlacialIndifference-Bold", sans-serif;
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
    justify-content: center;
    align-items: center;
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
</style>
