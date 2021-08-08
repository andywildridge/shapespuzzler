const dice = [
  [
    [0, 5],
    [5, 0],
  ],
  [
    [2, 0],
    [2, 1],
    [1, 2],
    [1, 1],
    [0, 1],
    [1, 0],
  ],
  [
    [4, 4],
    [4, 5],
    [3, 5],
    [4, 3],
    [3, 4],
    [5, 4],
  ],
  [
    [1, 3],
    [1, 4],
    [0, 2],
    [2, 5],
    [0, 0],
    [0, 3],
  ],
  [
    [3, 1],
    [2, 4],
    [3, 3],
    [3, 2],
    [2, 3],
    [2, 2],
  ],
  [
    [3, 0],
    [5, 5],
    [5, 3],
    [4, 2],
    [5, 2],
    [4, 1],
  ],
  [
    [4, 0],
    [5, 1],
    [1, 5],
    [0, 4],
    [1, 5],
  ],
];

function getPegs() {
  return dice.reduce((pegs, die) => {
    const face = die[Math.floor(Math.random() * die.length)];
    pegs.push({ x: face[0], y: face[1] });
    return pegs;
  }, []);
}

export default getPegs;
