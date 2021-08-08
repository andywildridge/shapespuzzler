function canPlace(gridPlacings, gridCoords, id) {
  const occupiedSquares = Object.keys(gridPlacings).reduce((arr, key) => {
    // ignore current shape position & get list of occupied grid squares
    if (id !== ~~key || key === "pegs") {
      gridPlacings[key].forEach((i) => arr.push(i));
    }
    return arr;
  }, []);
  const collision = gridCoords.some((i) => {
    return occupiedSquares.some(
      (square) => square.x === i.x && square.y === i.y
    );
  });
  return !collision;
}

export default canPlace;
