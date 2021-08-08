function gridComplete(gridPlacings) {
  const occupiedSquares = Object.keys(gridPlacings).reduce((count, key) => {
    gridPlacings[key].forEach((i) => {
      if (i.x >= 2 && i.x <= 7 && i.y >= 2 && i.y <= 7) {
        count++;
      }
    });
    return count;
  }, 0);
  return occupiedSquares;
}

export default gridComplete;
