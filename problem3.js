/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
var lastDay = 4;
var lastDay = 6;
for (let i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(`${i}-medicine`);
  } else {
    console.log(`${i}-rest`);
  }
}