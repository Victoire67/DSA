export default function pascalsTriangle(depth) {
  let pascalsArray = [];
  for (let i = 0; i <= depth; i++) {
    if (i === 0) {
      pascalsArray.push([1]);
    } else {
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
  return pascalsArray[depth];
}
