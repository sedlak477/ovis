import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    MeshBasicMaterial,
    Mesh,
  } from "three"
import { getEarth } from "./objects"

export const setup = (canvas: HTMLCanvasElement) => {
  const renderer = new WebGLRenderer({
    canvas,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000000000000
  )

  const scene = new Scene()
  scene.add(getEarth())

  const sun = new DirectionalLight( 0xffffff, 0.5 );
  scene.add(sun);
  sun.position.set(0, 6378137 * 40, 0)

  camera.position.x = 6378137 * 5
  camera.lookAt(0, 0, 0)

  function animate() {
    requestAnimationFrame(animate)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    renderer.render(scene, camera)
  }

  return animate
}