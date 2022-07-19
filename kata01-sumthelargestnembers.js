const sumLargestNumbers = function(data) {
  let firstLargest = 0;
  let secondLargest = 0;

  for(let i = 0; i < data.length; i++) {
    if (data[i] > firstLargest) {
      firstLargest = data[i];
    }
  }

  for(let i = 0; i < data.length; i++) {
    if (data[i] > secondLargest && data[i] < firstLargest) {
      secondLargest = data[i];
    }
  }

  return firstLargest + secondLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));