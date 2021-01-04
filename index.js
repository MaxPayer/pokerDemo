let pokers = [];
var Poker = require('./poker.js')
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 13; j++) {
    pokers.push(new Poker(i, j))
  }
}
pokers.push(new Poker(null, 14),new Poker(null, 15),);
// console.log(pokers);
const util = require('./util');
util.sortRandom(pokers);
// console.log(pokers.length);

let part1 = pokers.slice(0,17);
let part2 = pokers.slice(17,34);
let part3 = pokers.slice(34,51);
let desk = pokers.slice(51);

console.log('\n玩家1：');
util.print(part1);

console.log('\n玩家2：');
util.print(part2);

console.log('\n玩家3：');
util.print(part3);

console.log('\n桌面：');
util.print(desk);