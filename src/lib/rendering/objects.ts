import { Mesh, TextureLoader, SphereGeometry, MeshPhongMaterial, MeshBasicMaterial } from "three"
import earthTexture from "$lib/assets/textures/2k_earth_daymap.jpg"

/**
 * Get a WGS84 representation of the Earth.
 */
export const getEarth = () => {
  const EARTH_MAJOR_AXIS = 6378137
  const EARTH_MINOR_AXIS = 6356752
  const geometry = new SphereGeometry(EARTH_MAJOR_AXIS, 64, 64)
  const texture = new TextureLoader().load(earthTexture)
  const material = new MeshBasicMaterial({ map: texture })
  geometry.scale(1, EARTH_MINOR_AXIS / EARTH_MAJOR_AXIS, 1)
  const earth = new Mesh(geometry, material)
  return earth
}