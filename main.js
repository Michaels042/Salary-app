const displaySalary = document.getElementById("displaySalary");
let level = parseInt(prompt("What is your current level?"));
const check = document.getElementById("check");
let netSalary = 0;

const salaries = [
  0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000,
  60000, 65000, 70000, 75000, 80000,
];

if (level == 4) {
  netSalary = salaries[4] - salaries[4] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 5) {
  netSalary = salaries[5] - salaries[5] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 6) {
  netSalary = salaries[6] - salaries[6] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 7) {
  netSalary = salaries[7] - salaries[7] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 8) {
  netSalary = salaries[8] - salaries[8] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 9) {
  netSalary = salaries[9] - salaries[9] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 10) {
  netSalary = salaries[10] - salaries[10] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 11) {
  netSalary = salaries[11] - salaries[11] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 12) {
  netSalary = salaries[12] - salaries[12] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 13) {
  netSalary = salaries[13] - salaries[13] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 14) {
  netSalary = salaries[14] - salaries[14] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 15) {
  netSalary = salaries[15] - salaries[15] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else if (level == 16) {
  netSalary = salaries[16] - salaries[16] * 0.08;
  displaySalary.innerHTML = netSalary.toString();
} else {
  displaySalary.innerHTML = `<h4 style='color: brown';>Level not found (Please select level from 4 to 16):</h4> `;
}

// const displaySalary = document.getElementById("displaySalary");
// let level = parseInt(prompt("What is your current level?"));
// const check = document.getElementById("check");

// const salaries = [
//   0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000,
//   60000, 65000, 70000, 75000, 80000,
// ];

// for (let i = 0; i < salaries.length; i++) {
//   if (level === i) {
//     let netSalary = salaries[i] - salaries[i] * 0.08;
//     displaySalary.innerHTML = netSalary;
//     console.log(displaySalary);
//   } else {
//     displaySalary.innerHTML = "Level not found!";
//   }
// }
