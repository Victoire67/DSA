function pascalsTriangle(depth) {
  let pascalsArray = [];

  for (let i = 0; i < depth; i++) {
    // This has to run depth + 1 times
    // The first time , we have to check if the pascalsArray is empty

    if (i === 0) {
      pascalsArray.push([1]);
    } else {
      // we check the last array .
      if (i === 1) {
        pascalsArray.push([1, 1]);
      } else {
        let last = pascalsArray[pascalsArray.length - 1];

        let middle = last.map((number, index) => {
          if (index !== last.length - 1) {
            return number + last[index + 1];
          } else return 0;
        });
        middle = middle.filter((number) => number !== 0);
        pascalsArray.push([1, ...middle, 1]);
      }
    }
  }
  return pascalsArray.flat();
}

pascalsTriangle(4);

// 1,1,1,1,2,1,1,3,3,1 //  1, 1, 1, 1, 2, 0, 1, 1, 3, 2, 1, 0, 1
