import transformCoord from "./transformCoord";
import unitSize from "./unitSize";

function snap(shapeData, id) {
  let snapOffset = 0;
  const width = shapeData[id].defn[0].length;
  const height = shapeData[id].defn.length;
  let rotate = shapeData[id].rotate
    ? (Math.round(shapeData[id].rotate / 90) * 90) % 360
    : 0;
  if (rotate < 0) {
    rotate = 360 + rotate;
  }

  // offset height and width on rotate
  if (rotate % 180 === 90 && width !== height) {
    snapOffset = (width - height) * (unitSize / 2);
  }
  const x =
    Math.round((shapeData[id].x + snapOffset) / unitSize) * unitSize -
    snapOffset;
  const y =
    Math.round((shapeData[id].y - snapOffset) / unitSize) * unitSize +
    snapOffset;

  const gridX = x / unitSize + snapOffset / unitSize;
  const gridY = y / unitSize - snapOffset / unitSize;

  const gridCoords = rotateArrayCoords(
    shapeData[id].defn,
    rotate,
    gridX,
    gridY
  );

  return { x, y, rotate, gridCoords };
}

function rotateArrayCoords(arr, rotate, gridX, gridY) {
  const width = arr[0].length - 1;
  const height = arr.length - 1;
  const coords = arr.reduce((coords, row, y) => {
    row.forEach((_, x) => {
      if (row[x]) {
        coords.push({ x, y });
      }
    });
    return coords;
  }, []);
  // const rotateUnits = rotate / 90;
  const rotateCoords = coords.map((i) =>
    transformCoord(i.x, i.y, width, height, rotate)
  );

  return rotateCoords.map((i) => ({ x: i.x + gridX, y: i.y + gridY }));
}

export default snap;
