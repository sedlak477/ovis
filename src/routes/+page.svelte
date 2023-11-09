<script lang="ts">
  import { onMount } from "svelte"
  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
  } from "three"

  let canvas: HTMLCanvasElement

  onMount(() => {
    console.log("canvas", canvas)

    const scene = new Scene()
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new WebGLRenderer({
      canvas,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)

    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    function animate() {
      requestAnimationFrame(animate)
      renderer.setSize(window.innerWidth, window.innerHeight)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
  })
</script>

<svelte:head>
  <title>Orbit Visualizer</title>
</svelte:head>

<canvas bind:this={canvas} style="width: 100%; height: 100%;" />
