const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
const userArrayKeys = Object.keys(object1);
const userArrayVals = Object.values(object1);
console.log(userArrayKeys);
console.log(userArrayVals);
console.log(Object.entries(object1));

