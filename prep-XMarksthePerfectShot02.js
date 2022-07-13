let endPoint = [0, 0];

const finalPosition = function (moves) {
  for (var move of moves) {
    if (move === "north") {
      endPoint[1] += 1;
    } else if (move === "south") {
      endPoint[1] -= 1;
    } else if (move === "east") {
      endPoint[0] += 1;
    } else if (move === "west") {
      endPoint[0] -= 1;
    }
  }
  console.log(endPoint);
};

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  
const otherMoves = ['south', 'south', 'east', 'east', 'east']

finalPosition(otherMoves);