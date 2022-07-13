function ageCalculator(name, born, current) {
  let age = current - born;
  return(name + ' is ' + age + 'years old.');
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

//function ageCalculator(name, yearOfBirth, currentYear) {
//  return name + ' is ' + (currentYear - yearOfBirth) + ' years old.'
//}
//
//console.log(ageCalculator("Miranda", 1983, 2015));
//console.log(ageCalculator("Ferdinand", 1988, 2015));


function ageCalculator(name, born, current) {
  let age = current - born;
  return(name + 'is' + age + 'years old.');
}