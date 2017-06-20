const array = ['cat', 'dog', 'bears', 'lions', 'tigers', 'mountainlion', 'catfish'];

const feline = function (item) {
    return item === 'cat';
};
//returns cat
console.log(array.find(feline));

const hound = function (item) {
    return item === 'dog';
};
//returns dog
console.log(array.find(hound));

const myFind = function (array, func) {
  let result = '';
  array.forEach(function(item) {
    if(func(item)) {
      result = item;
    }
  });
  return result;
};

console.log(myFind(array, hound));

const kitty = function(anArray) {
  let cat = '';
  anArray.forEach(function(item) {
    if(item === 'cat') {
      cat = item;
    }
  });
  return cat;
};
console.log(kitty(array));

const puppy = function(anArray) {
  let dog = '';
  anArray.forEach(function(item) {
    if(item === 'dog') {
      dog = item;
    }
  });
  return dog;
};
console.log(puppy(array));

const findAnimal = function(anArray, animal) {
  let result = '';
  anArray.forEach(function(item) {
    if(item === animal) {
      result = item;
    }
  });
  return result;
};
console.log(findAnimal(array, 'dog'));

const pets = [
  {pet: 'cat', name: 'kitty'},
  {pet: 'puppy', name: 'spot'},
  {pet: 'dog', name: 'Fluffy'}
];

const guardDog = function (obj) {
  return obj.pet === 'dog';
};

console.log(pets.find(guardDog).name);

const harryPotter = function (anArray) {
  let madeUpCreature;
  anArray.forEach(function (obj) {
    if (obj.pet === 'dog') {
      madeUpCreature = obj;
    }
  });
  return madeUpCreature;
};
console.log(harryPotter(pets).name);

const myFindObj = function (array, func) {
  let result;
  array.forEach(function(obj) {
    if(!result && func(obj)) {
      result = obj;
    }
  });
  return result;
};
console.log(myFindObj(pets, guardDog).name)
