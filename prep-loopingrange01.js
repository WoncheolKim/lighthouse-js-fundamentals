let range = function(start, end, step) {
  let list = [];
  let num = start;
  if(end > start && step > 0) {
    while (num <= end) {
      list.push(num);
      num += step;
    }
  }
  return list;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));