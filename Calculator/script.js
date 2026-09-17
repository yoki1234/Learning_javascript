const numbersAndOperators = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "**", "=", "Reset","<","(",")"];

const operatorName = {
  "+": "plus",
  "-": "minus",
  "*": "multiply",
  "/": "divide",
  "**": "power",
  "=": "equal",
  "Reset": "reset",
  "<": "backspace",
  "(": "openbt",
  ")":"closebt",
}


document.getElementById("numberAndOperatorBtns").innerHTML = numbersAndOperators
    .map((item) => {
      const areaName = operatorName[item] || item;
      return `<button onclick="buttonClick('${item}')" style="grid-area: btn-${areaName};">${item}</button>`;
    })
    .join("");

const display = document.getElementById("result");

function buttonClick(value) {
  if (value === "Reset") {
    display.value = 0 || " ";
  } else if (value === "<") {
    display.value = String(display.value).slice(0, -1) || " ";
  } else if (value === "=") {
    display.value = eval(display.value);
  } else {
    display.value += value;
  }
}

