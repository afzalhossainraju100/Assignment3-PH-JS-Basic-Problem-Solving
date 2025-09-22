/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var experience = 3;
var experience = 40;
var startingSalary = 15000;
var startingSalary = 30000;
let currentSalary = startingSalary;
for (let i = 1; i <= experience; i++) {
  const incriment = currentSalary * (5 / 100);
  currentSalary += incriment;
}
console.log(`${currentSalary.toFixed(2)}`);
