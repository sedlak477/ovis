import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    Mesh,
    AmbientLight,
  } from "three"
import { getEarth } from "./objects"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

export const setup = (canvas: HTMLCanvasElement) => {
  const renderer = new WebGLRenderer({
    canvas,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const camera = new PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    1,
    10000000000000
  )

  const scene = new Scene()

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  const stats = new Stats()
  document.body.appendChild(stats.dom)

  scene.add(getEarth())

  // const ambientLight = new AmbientLight(0xffffff, 0.01)
  // scene.add(ambientLight)

  const sun = new DirectionalLight( 0xffffff, 1 );
  scene.add(sun);
  sun.position.set(0, 0, -6378137 * 40)

  camera.position.x = 6378137 * 3
  camera.lookAt(0, 0, 0)

  function animate() {
    requestAnimationFrame(animate)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    renderer.render(scene, camera)
  }

  return animate
}