const organizeInstructors = function(instructors) {
  const organized = {};
  for(const i of instructors) {
    if(organized[i.course] === undefined) {
      organized[i.course] = [i.name];
    } else {
      organized[i.course].push(i.name);
    }
  }
  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));