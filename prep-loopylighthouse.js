let num = 100;
for(num = 100; num <= 200; num++) {
  if(num % 3 && num % 4) {
    console.log("Loopy Lighthouse");
  } else if (num % 4) {
    console.log("Lighthouse");
  } else if (num % 3) {
    console.log("Loopy");
  } else {
    console.log(num);
  }
}