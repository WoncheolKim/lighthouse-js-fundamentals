const isOdd = function (num) {
  return num % 2 === 1;
}

const tenIsEven = isOdd(10);
const elevenIsEven = isOdd(11);

console.log(tenIsEven);
console.log(elevenIsEven);
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("15 is odd: " + isOdd(15));