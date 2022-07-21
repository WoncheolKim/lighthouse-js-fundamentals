//smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
//
//const smartGarbage = function(trash, bins) {
//  if(trash === "recycling") {
//    bins.recycling += 1;
//  } else if (trash === "waste") {
//    bins.waste += 1;
//  } else if (trash === "compost") {
//    bins.compost += 1;
//  } else {
//    console.log(bins);
//  }
//}

console.log(smartGarbage('recycling', {waste: 4, recycling: 2, compost: 5}));
function smartGarbage(trash, bins) {
  bins[trash] ++;
  return(bins);
}