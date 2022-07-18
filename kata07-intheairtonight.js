const checkAir = function (samples, threshold) {
  let cleanNumber = 0;
  let dirtyNumber = 0;
  let result = 0;

  for(let sample of samples) {
    if(sample === 'clean') {
      cleanNumber += 1;
    } else {
      dirtyNumber += 1;
    }
  }
  let totalNumber = cleanNumber + dirtyNumber;

  result = Math.round(cleanNumber/totalNumber);

  if(result < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))