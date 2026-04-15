function getNeighbourhood(type, matrix, coordinates) {
  if (matrix.length === 0) return [];
  matrix = matrix.map((innerArr) => innerArr.map(String));
  if (!matrix[coordinates[0]] || !matrix[coordinates[0]][coordinates[1]])
    return [];

  // Changes the matrix to have numbers . (WHY did i do this ? )

  switch (type) {
    case "moore": {
      let upper = [];
      if (coordinates[0] - 1 >= 0) {
        upper = matrix[coordinates[0] - 1] || []; // the upper array .

        if (upper !== undefined) {
          let upperX = upper[coordinates[1] - 1] || null;
          let upperY = upper[coordinates[1]] || null;
          let upperZ = upper[coordinates[1] + 1] || null;
          upper = [upperX, upperY, upperZ];
        }
      }
      // Always there

      let middle = matrix[coordinates[0]];
      let middleX = middle[coordinates[1] - 1] || null;
      let middleY = middle[coordinates[1] + 1] || null;
      middle = [middleX, middleY];

      let downer = matrix[coordinates[0] + 1] || [];

      if (downer.length) {
        let downerX = downer[coordinates[1] - 1] || null;
        let downerY = downer[coordinates[1]] || null;
        let downerZ = downer[coordinates[1] + 1] || null;
        downer = [downerX, downerY, downerZ];
      }

      return [...upper, ...middle, ...downer]
        .filter((neighbor) => neighbor !== null)
        .map(Number);
    }
    case "von_neumann":
      let upper = [];
      if (coordinates[0] - 1 >= 0) {
        upper = matrix[coordinates[0] - 1];
        let upperY = upper !== undefined ? upper[coordinates[1]] : null;
        upper = [upperY];
      }
      const middle = [
        matrix[coordinates[0]][coordinates[1] - 1] || null,
        matrix[coordinates[0]][coordinates[1] + 1] || null,
      ];
      let downer;
      downer =
        coordinates[0] + 1 <= matrix.length - 1
          ? [matrix[coordinates[0] + 1][coordinates[1]]]
          : null;

      return [...upper, ...middle, downer]
        .filter((neighbor) => neighbor !== null)
        .map(Number);
  }
}
