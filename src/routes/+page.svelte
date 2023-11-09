<script lang="ts">
  import { onMount } from "svelte"
  import { setup } from "$lib/rendering/setup"

  let canvas: HTMLCanvasElement

  onMount(() => {
    requestAnimationFrame(setup(canvas))
  })
</script>

<svelte:head>
  <title>Orbit Visualizer</title>
</svelte:head>

<canvas bind:this={canvas} />
