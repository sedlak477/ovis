/**
 * Get the position of the Sun at a given time in ecliptic coordinates.
 * @param time 
 * @returns 
 */
export const getSunPosition = (time: Date) => {
  const t = (time.getTime() - Date.UTC(2000, 0, 1)) / 86400000
  const n = 360 * t / 365.242191
  const m = 357.52911 + n
  const c = 1.914602 - 0.004817 * t
  const l = m + 0.019993 * Math.sin(m) + 0.000289 * Math.sin(2 * m)
  const e = 23.439291 - 0.0130042 * t
  const o = l + 102.9372
  const x = Math.cos(o)
  const y = Math.sin(o)
  const z = Math.cos(e)
  const w = Math.sin(e)
  const y2 = y * z
  const z2 = z * z
  const r = Math.sqrt(1 - z2 * w * w)
  const declination = Math.atan2(y2, r)
  const rightAscension = Math.atan2(x, y * w + z2)
  return {
    declination,
    rightAscension,
  }
}