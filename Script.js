"use strict";

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

//Main Heading
let main = document.createElement("h1");
let heading = document.createTextNode("Calculator");
main.appendChild(heading);
document.body.appendChild(main);

//input Box
let input = document.createElement("input");
input.id = "demo";
input.style.display = "block";
input.style.marginLeft = "auto";
input.style.marginRight = "auto";
document.body.appendChild(input);

//Onkeypress Event
document.getElementById("demo").onkeypress = function (e) {
  var x = e.key;
  if (
    x == Number(x) ||
    x == "+" ||
    x == "-" ||
    x == "*" ||
    x == "/" ||
    x == "%"
  ) {
    return true;
  } else {
    return false;
  }
};
// table inside the body
document.getElementById("body").appendChild(table);

//Row 2 Data

let row2 = document.createElement("tr");
let d1_2 = document.createElement("td");
d1_2.addEventListener("click", Clear_function);
let btn_r2_1 = document.createElement("button");
let btn_r2_1_text = document.createTextNode("C");
btn_r2_1.appendChild(btn_r2_1_text);
d1_2.appendChild(btn_r2_1);
row2.appendChild(d1_2);

let d2_2 = document.createElement("td");
d2_2.addEventListener("click", Back_space);
let btn_r2_2 = document.createElement("button");
let btn_r2_2_text = document.createTextNode("BackSpace");
btn_r2_2.appendChild(btn_r2_2_text);
d2_2.appendChild(btn_r2_2);
row2.appendChild(d2_2);

let d3_2 = document.createElement("td");
d3_2.id = "percentage";
let btn_r2_3 = document.createElement("button");
let btn_r2_3_text = document.createTextNode("%");
btn_r2_3.appendChild(btn_r2_3_text);
d3_2.appendChild(btn_r2_3);
row2.appendChild(d3_2);

let d4_2 = document.createElement("td");
d4_2.id = "multiplication";
let btn_r2_4 = document.createElement("button");
let btn_r2_4_text = document.createTextNode("❌");
btn_r2_4.appendChild(btn_r2_4_text);
d4_2.appendChild(btn_r2_4);
row2.appendChild(d4_2);
tbody.appendChild(row2);

//Row 3 Data
let row3 = document.createElement("tr");
let d1_3 = document.createElement("td");
d1_3.id = "seven";
let btn_r3_1 = document.createElement("button");
let btn_r3_1_text = document.createTextNode("7");
btn_r3_1.appendChild(btn_r3_1_text);
d1_3.appendChild(btn_r3_1);
row3.appendChild(d1_3);

let d2_3 = document.createElement("td");
d2_3.id = "eight";
let btn_r3_2 = document.createElement("button");
let btn_r3_2_text = document.createTextNode("8");
btn_r3_2.appendChild(btn_r3_2_text);
d2_3.appendChild(btn_r3_2);
row3.appendChild(d2_3);

let d3_3 = document.createElement("td");
d3_3.id = "nine";
let btn_r3_3 = document.createElement("button");
let btn_r3_3_text = document.createTextNode("9");
btn_r3_3.appendChild(btn_r3_3_text);
d3_3.appendChild(btn_r3_3);
row3.appendChild(d3_3);

let d4_3 = document.createElement("td");
d4_3.id = "division";
let btn_r3_4 = document.createElement("button");
let btn_r3_4_text = document.createTextNode("➗");
btn_r3_4.appendChild(btn_r3_4_text);
d4_3.appendChild(btn_r3_4);
row3.appendChild(d4_3);
tbody.appendChild(row3);

// //Row 4 Data
let row4 = document.createElement("tr");
let d1_4 = document.createElement("td");
d1_4.id = "four";
let btn_r4_1 = document.createElement("button");
let btn_r4_1_text = document.createTextNode("4");
btn_r4_1.appendChild(btn_r4_1_text);
d1_4.appendChild(btn_r4_1);
row4.appendChild(d1_4);

let d2_4 = document.createElement("td");
d2_4.id = "five";
let btn_r4_2 = document.createElement("button");
let btn_r4_2_text = document.createTextNode("5");
btn_r4_2.appendChild(btn_r4_2_text);
d2_4.appendChild(btn_r4_2);
row4.appendChild(d2_4);

let d3_4 = document.createElement("td");
d3_4.id = "six";
let btn_r4_3 = document.createElement("button");
let btn_r4_3_text = document.createTextNode("6");
btn_r4_3.appendChild(btn_r4_3_text);
d3_4.appendChild(btn_r4_3);
row4.appendChild(d3_4);

let d4_4 = document.createElement("td");
d4_4.id = "subtraction";
let btn_r4_4 = document.createElement("button");
let btn_r4_4_text = document.createTextNode("➖");
btn_r4_4.appendChild(btn_r4_4_text);
d4_4.appendChild(btn_r4_4);
row4.appendChild(d4_4);
tbody.appendChild(row4);

// //Row 5 Data
let row5 = document.createElement("tr");
let d1_5 = document.createElement("td");
d1_5.id = "one";
let btn_r5_1 = document.createElement("button");
let btn_r5_1_text = document.createTextNode("1");
btn_r5_1.appendChild(btn_r5_1_text);
d1_5.appendChild(btn_r5_1);
row5.appendChild(d1_5);

let d2_5 = document.createElement("td");
d2_5.id = "two";
let btn_r5_2 = document.createElement("button");
let btn_r5_2_text = document.createTextNode("2");
btn_r5_2.appendChild(btn_r5_2_text);
d2_5.appendChild(btn_r5_2);
row5.appendChild(d2_5);

let d3_5 = document.createElement("td");
d3_5.id = "three";
let btn_r5_3 = document.createElement("button");
let btn_r5_3_text = document.createTextNode("3");
btn_r5_3.appendChild(btn_r5_3_text);
d3_5.appendChild(btn_r5_3);
row5.appendChild(d3_5);

let d4_5 = document.createElement("td");
d4_5.id = "Addition";
let btn_r5_4 = document.createElement("button");
let btn_r5_4_text = document.createTextNode("➕");
btn_r5_4.appendChild(btn_r5_4_text);
d4_5.appendChild(btn_r5_4);
row5.appendChild(d4_5);
tbody.appendChild(row5);

//Row 6 Data
let row6 = document.createElement("tr");
let d1_6 = document.createElement("td");
d1_6.id = "zero";
let btn_r6_1 = document.createElement("button");
let btn_r6_1_text = document.createTextNode("0");
btn_r6_1.appendChild(btn_r6_1_text);
d1_6.appendChild(btn_r6_1);
row6.appendChild(d1_6);

let d2_6 = document.createElement("td");
d2_6.id = "double_zero";
let btn_r6_2 = document.createElement("button");
let btn_r6_2_text = document.createTextNode("00");
btn_r6_2.appendChild(btn_r6_2_text);
d2_6.appendChild(btn_r6_2);
row6.appendChild(d2_6);

let d3_6 = document.createElement("td");
d3_6.id = "point";
let btn_r6_3 = document.createElement("button");
let btn_r6_3_text = document.createTextNode(".");
btn_r6_3.appendChild(btn_r6_3_text);
d3_6.appendChild(btn_r6_3);
row6.appendChild(d3_6);

let d4_6 = document.createElement("td");
d4_6.id = "equal";
let btn_r6_4 = document.createElement("button");
let btn_r6_4_text = document.createTextNode("Equal");
btn_r6_4.appendChild(btn_r6_4_text);
d4_6.appendChild(btn_r6_4);
row6.appendChild(d4_6);
tbody.appendChild(row6);

//Calculation
document.getElementById("equal").addEventListener("click", () => {
  let x = document.querySelector("input").value;
  let result = eval(x);
  document.getElementById("demo").value = result;
});

//Clear Input panel
function Clear_function() {
  document.getElementById("demo").value = "";
}

//backSpace
function Back_space() {
  var back = document.querySelector("input").value;
  var result = back.substring(0, back.length - 1);
  document.getElementById("demo").value = result;
}

// percentage btn onclick
document.getElementById("percentage").addEventListener("click", () => {
  let x = "%";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

//multiplication btn onclick
document.getElementById("multiplication").addEventListener("click", () => {
  let x = "*";
  var select = document.querySelector("input").value;
  var final = select.substring(select.length - 1, select.length);
  if (final == Number(final)) {
    document.querySelector("input").value =
      document.querySelector("input").value + x;
  } else {
    final = select.substring(0, select.length - 1);
    document.querySelector("input").value = final + x;
  }
});

// seven btn onclick
document.getElementById("seven").addEventListener("click", () => {
  let x = "7";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// eight btn onclick
document.getElementById("eight").addEventListener("click", () => {
  let x = "8";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// nine btn onclick
document.getElementById("nine").addEventListener("click", () => {
  let x = "9";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// division Onclick
document.getElementById("division").addEventListener("click", () => {
  let x = "/";
  var select = document.querySelector("input").value;
  var final = select.substring(select.length - 1, select.length);
  if (final == Number(final)) {
    document.querySelector("input").value =
      document.querySelector("input").value + x;
  } else {
    final = select.substring(0, select.length - 1);
    document.querySelector("input").value = final + x;
  }
});

// four btn onclick
document.getElementById("four").addEventListener("click", () => {
  let x = "4";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// five btn onclick
document.getElementById("five").addEventListener("click", () => {
  let x = "5";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// six btn onclick
document.getElementById("six").addEventListener("click", () => {
  let x = "6";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// subtraction Onclick
document.getElementById("subtraction").addEventListener("click", () => {
  let x = "-";
  var select = document.querySelector("input").value;
  var final = select.substring(select.length - 1, select.length);
  if (final == Number(final)) {
    document.querySelector("input").value =
      document.querySelector("input").value + x;
  } else {
    final = select.substring(0, select.length - 1);
    document.querySelector("input").value = final + x;
  }
});

// one btn onclick
document.getElementById("one").addEventListener("click", () => {
  let x = "1";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// two btn onclick
document.getElementById("two").addEventListener("click", () => {
  let x = "2";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// three btn onclick
document.getElementById("three").addEventListener("click", () => {
  let x = "3";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// Addition Onclick
document.getElementById("Addition").addEventListener("click", () => {
  let x = "+";
  var select = document.querySelector("input").value;
  var final = select.substring(select.length - 1, select.length);
  if (final == Number(final)) {
    document.querySelector("input").value =
      document.querySelector("input").value + x;
  } else {
    final = select.substring(0, select.length - 1);
    document.querySelector("input").value = final + x;
  }
});

// zero btn onclick
document.getElementById("zero").addEventListener("click", () => {
  let x = "0";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// double zero btn onclick
document.getElementById("double_zero").addEventListener("click", () => {
  let x = "00";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});

// point btn onclick
document.getElementById("point").addEventListener("click", () => {
  let x = ".";
  document.getElementById("demo").value =
    document.getElementById("demo").value + x;
});
