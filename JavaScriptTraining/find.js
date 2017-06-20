const array = ['cat', 'dog', 'bears', 'lions', 'tigers', 'mountainlion', 'catfish'];

const feline = function (item) {
    return item === 'cat';
};

const hound = function (item) {
    return item === 'dog';
};
//returns cat
console.log(array.find(feline));

//return dog
console.log(array.find(hound));

// make this function return dog using a forEach with the array and function as arguments
const myFind = function (array, func) {

};
console.log(myFind(array, hound));

// make this function return cat using a forEach using only the array as an argument
const kitty = function(anArray) {

};
console.log(kitty(array));

// make this function return cat using a forEach using only the array as an argument
const puppy = function(anArray) {

};
console.log(puppy(array));

// make this function return dog using a forEach using the array and desired animal as arguments
const findAnimal = function(anArray, animal) {

};
console.log(findAnimal(array, 'dog'));

const pets = [
  {pet: 'cat', name: 'kitty'},
  {pet: 'puppy', name: 'spot'},
  {pet: 'dog', name: 'Fluffy'}
];

//write the function to return fluffy
const guardDog = function (obj) {

};
console.log(pets.find(guardDog).name);


// write your own find function that returns fluffy using a forEach using 1 argument.
const harryPotter = function (anArray) {

};
console.log(harryPotter(pets).name);


// write your own find function that returns fluffy using a forEach using 2 arguments.
const myFindObj = function (array, func) {

};
console.log(myFindObj(pets, guardDog).name)
