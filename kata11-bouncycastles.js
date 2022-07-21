// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return ((4/3) * PI * (radius*radius*radius));
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (PI*(radius*radius)*(height/3));
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return (width * depth * height);
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  returnVolume=0;
  for (let x=0; x < solids.length; x++) {
    if(solids[x].type === 'sphere') {
      returnVolume+=sphereVolume(solids[x].radius);
    }if(solids[x].type === 'cone') {
      returnVolume+=coneVolume(solids[x].radius,solids[x].height);
    }
  }
  return returnVolume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);