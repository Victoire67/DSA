import pascalsTriangle from "./pascal'sTriangle.js";

function expand(exp) {
  let myVar = [...exp].find((char) => char.match(/[a-z]/));
  console.log(myVar);
  // We get the power , left and right character
  const power = Number(exp.at(-1));

  if (power === 1) {
    return [...exp.split("^")[0]]
      .filter((char) => char !== ")" && char !== "(")
      .join("");
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

  let left = exp.split(expressionSplitter)[0];
  const right = exp.split(expressionSplitter)[1];

  // we get it's pascals array

  const pascalsPattern = pascalsTriangle(power);

  // We create a loop that loops a number of power + 1
  // Initialise right and leftExp and result
  let leftExp = power;
  let rightExp = 0;
  let result = "";
  let coefficientOnA =
    Number([...left].filter((char) => Number(char)).join("")) || 1;
  for (let i = 0; i <= power; i++) {
    // coefficient computes the number on the right
    let coefficient =
      pascalsPattern[i] * right ** rightExp * coefficientOnA ** leftExp;
    coefficient === 1 ? (coefficient = "") : (coefficient = coefficient);

    // left = coefficientOnA === 1 ? myVar : coefficient ** leftExp + [...left].find((char) => !Number(char));

    let variable =
      leftExp === 1 ? left : leftExp > 1 ? myVar + "^" + leftExp : "1";

    result += `(${coefficient + variable})${i < power ? "+" : ""}`;
    if (leftExp === 0) {
      
    }

    leftExp--;
    rightExp++;

  }
  result = [...result].filter((x) => x !== ")" && x !== "(");
  return signLogic(result);
}

function signLogic(someMathematicalExpression) {
  let arr = [...someMathematicalExpression];
  return arr
    .map((character, index) => {
      if (character === "+" || character === "-") {
        if (arr[index + 1] === "+" || arr[index + 1] === "-") {
          return "";
        }
        return character;
      }
      return character;
    })
    .join("");
}

console.log(expand("(34m+1)^2"));
