function transformCoord(x, y, width, height, rotate) {
  if (rotate === 180) {
    return { x: width - x, y: height - y };
  } else if (rotate === 90) {
    return { x: height - y, y: x };
  } else if (rotate === 270) {
    return { x: y, y: width - x };
  } else {
    return { x, y };
  }
}

export default transformCoord;
