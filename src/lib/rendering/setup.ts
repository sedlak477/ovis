import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
  } from "three"
import { getEarth } from "./objects"

export const setup = (canvas: HTMLCanvasElement) => {
    const scene = new Scene()
    const camera = new PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      1,
      100000
    )
    const renderer = new WebGLRenderer({
      canvas,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)

    scene.add(getEarth())

    camera.position.z = 4000

    function animate() {
      requestAnimationFrame(animate)
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      renderer.render(scene, camera)
    }

    return animate
}