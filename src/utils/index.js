export const changeInBoundaries = function (obj, key, min, max, v) {
  let newV = 0

  if (v < min) {
    newV = min
  } else if (v > max) {
    newV = max
  } else {
    newV = v
  }

  obj[key] = newV
}
