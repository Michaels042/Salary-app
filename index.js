const displaySalary = document.getElementById("displaySalary");
let level = parseInt(prompt("What is your current level?"));
const check = document.getElementById("check");

const salaries = [
  0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000,
  60000, 65000, 70000, 75000, 80000,
];

if (level <= 16) {
  let netSalary = salaries[level] - salaries[level] * 0.08;
  displaySalary.innerHTML = netSalary;
  console.log(displaySalary);
} else {
  displaySalary.innerHTML = "Level not found";
}
