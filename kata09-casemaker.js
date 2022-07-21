const camelCase = function(input) {
  let result = "";
  let capitalize = false;

  for(i of input) {
    if(i === " ") {
      capitalize = true;
    } else if (capitalize) {
      result += i.toUpperCase();
      capitalize = false;
    } else {
      result += i;
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));