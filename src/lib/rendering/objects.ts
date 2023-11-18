import { Mesh, TextureLoader, SphereGeometry, MeshPhongMaterial, Vector2, ObjectSpaceNormalMap } from "three"
import earthTexture from "$lib/assets/textures/8k_earth_daymap.jpg"
import earthSpecular from "$lib/assets/textures/8k_earth_specular_map.tif"
import earthNormal from "$lib/assets/textures/8k_earth_normal_map.tif"

/**
 * Get a WGS84 representation of the Earth.
 */
export const getEarth = () => {
  const EARTH_MAJOR_AXIS = 6378137
  const EARTH_MINOR_AXIS = 6356752
  const geometry = new SphereGeometry(EARTH_MAJOR_AXIS, 64, 64)
  geometry.scale(1, EARTH_MINOR_AXIS / EARTH_MAJOR_AXIS, 1)

  const material = new MeshPhongMaterial()
  material.map = new TextureLoader().load(earthTexture)
  material.specularMap = new TextureLoader().load(earthSpecular)
  // material.normalMap = new TextureLoader().load(earthNormal)
  // material.normalScale.set(2, -2)
  
  const earth = new Mesh(geometry, material)
  return earth
}