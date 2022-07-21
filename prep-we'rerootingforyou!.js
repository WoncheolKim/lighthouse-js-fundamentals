const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';
console.log(judgeVegetable(vegetables, metric));

function judgeVegetable(vegetables, metric) {
  let theWinner = '';
  let theMetric = 0;
  let theIndex = 0;
  
  for(const vegetable of vegetables) {
    if(vegetable[metric] > theMetric) {
      theWinner = vegetable.submitter;
      theMetric = vegetable[metric];
    }
  }
  return theWinner;
}