function pascalsTriangle(depth) {
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



function expand(exp) {
  // We get the power , left and right character
  const power = Number(exp.at(-1));

  if (power === 1) {
    return [...exp.split("^")[0]].filter(
      (char) => char !== ")" && char !== "(",
    );
  }

  // we remove the part with the exponent to keep values inside the parantheses
  exp = [...exp.slice(0, exp.length - 2)]
    .filter((char) => char !== "(" && char !== ")")
    .join("");
  // The regular expression should do the following :
  // 1. match +
  // 2. match - ( minus should be between a number on the right and a word character )
  const expressionSplitter = new RegExp(/(?<=[a-zA-Z0-9](?=[+-]))/);
  // We get the left and right
  const left = exp.split(expressionSplitter)[0];
  const right = exp.split(expressionSplitter)[1];
  // we get it's pascals array
  const pascalsPattern = pascalsTriangle(power);

  // We create a loop that loops a number of power + 1
  // Initialise right and leftExp and result
  let leftExp = power;
  let rightExp = 0;
  let result = "";

  for (let i = 0; i <= power; i++) {
    let coefficient = pascalsPattern[i] * right ** rightExp;
    coefficient === 1 ? (coefficient = "") : (coefficient = coefficient);

    let variable =
      leftExp === 1 ? left : leftExp > 1 ? left + "^" + leftExp : "1";
    result += `(${coefficient + variable})${i < power ? "+" : ""}`;
    leftExp--;
    rightExp++;
  }
  result = [...result].filter((x) => x !== ")" && x !== "(");
  return result;
}




expand("(x-1)^1");

