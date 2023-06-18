// Nested Arrays

const equipSheIfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipSheIfA[1]);
console.log(clothesShelfB[1]);


const equipDept = [equipSheIfA, equipShelfB];
const clothDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothDept[1][1]);

const sportStore=[equipDept,clothDept]
console.log(sportStore);
console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][1]);
// console.log(sportStore);