const numbers = [1,2,3,4,5,6,7,8,9,0];
const operators = ["+", "-", "*", "/", "**", "=", "Reset"];

document.getElementById("numberBtns").innerHTML= numbers.map((item)=> `<button> ${item} </button>`).join(" ");
document.getElementById("operatorBtns").innerHTML= operators.map((item)=>`<button>${item}</button>`).join(" ");