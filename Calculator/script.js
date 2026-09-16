const numbersAndOperators = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "**", "=", "Reset"];

const operatorName = {
  "+": "plus",
  "-": "minus",
  "*": "multiply",
  "/": "divide",
  "**": "power",
  "=": "equal",
  "Reset": "reset"
}


document.getElementById("numberAndOperatorBtns").innerHTML = numbersAndOperators
    .map((item) => {
      const areaName = operatorName[item] || item;
      return `<button style="grid-area: btn-${areaName};">${item}</button>`;
    })
    .join("");

  

