export interface EquatorialCoordinate {
  /**
   * Right ascension in radians.
   */
  ascension: number

  /**
   * Declination in radians.
   */
  declination: number

  /**
   * Radius in kilometers.
   */
  radius: number
}

/**
 * Coordinate system in 3D world space.
 * 
 * The X/Z plane is the equatorial plane and the prime meridian lies in the X/Y plane. 
 */
export interface XYZCoordinate {
  x: number
  y: number
  z: number
}

export const fromEquatorialToXYZ = (equatorial: EquatorialCoordinate): XYZCoordinate => {
  const { ascension, declination, radius } = equatorial

  const x = radius * Math.cos(ascension) * Math.cos(declination)
  const y = radius * Math.sin(ascension) * Math.cos(declination)
  const z = radius * Math.sin(declination)

  return {
    x,
    y,
    z,
  }
}
