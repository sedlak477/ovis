import { Mesh, MeshBasicMaterial, SphereGeometry } from "three"

/**
 * Get a WGS84 representation of the Earth.
 */
export const getEarth = () => {
  const EARTH_MAJOR_AXIS = 6378137
  const EARTH_MINOR_AXIS = 6356752
  const geometry = new SphereGeometry(EARTH_MAJOR_AXIS, 32, 32)
  geometry.scale(1, EARTH_MINOR_AXIS / EARTH_MAJOR_AXIS, 1)
  const material = new MeshBasicMaterial({ color: 0x0000ff })
  const earth = new Mesh(geometry, material)
  return earth
}