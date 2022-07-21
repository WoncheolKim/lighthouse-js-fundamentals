const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

function finalPosition(movements){

  let finalTo = [0,0];

  for(let i = 0;i <= movements.length;i++){
    let whereTo = movements[i];
    switch(whereTo){
    case 'north':
      finalTo[1]++;
      break;
    case 'south':
      finalTo[1]--;
      break;
    case 'east':
      finalTo[0]++;
      break;
    case 'west':
      finalTo[0]--;
      break;
    }
  }
  return(finalTo);
}