const urlEncode = function(text) {
  let newString = "";
  for(const i of text.trim()) {
    newString += 1 === " " ? "%20" : i;
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));