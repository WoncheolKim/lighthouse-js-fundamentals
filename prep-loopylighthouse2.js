loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

let loopyLighthouse = function(range, multiple, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiple[0] === 0 && i % multiple[1] === 0) {
      console.log(i + words[0] + words[1]);
    } else if (i % multiple[0] === 0) {
      console.log(i + words[0]);
    } else if (i % multiple[1] === 0) {
      console.log(i + words[1]);
    } else {
      console.log(i);
    }
  }
};