const talkingCalendar = function(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const year = date.substr(0.4);
  const monthIndex = date.substr(5, 2) -1;
  const month = monthNames[monthIndex];
  let day = Number(date.substr(8,2));

  if (day == 1) {
    day += "st";
  } else if (day == 2) {
    day += "nd";
  } else if (day == 3) {
    day += "rd";
  } else {
    day += "th";
  }

  const result = month + " " + day + ", " + year;
  return result; 
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));