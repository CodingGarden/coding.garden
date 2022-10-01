<script>
  export let source;
  let image;

  $: if (image) {
    image.innerHTML = source;
  }
</script>

<div bind:this={image}>
</div>