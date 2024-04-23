// Javascript Nuggets - Filter and Find
//https://youtu.be/KeYxsev737s?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ
// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];
const peopleArray = ["peter", "bob", "suzy", "anna", "peter1"];
// filter
const newPeople0 = people.filter((person) => person.name === "bob");
console.log(newPeople0);
const newPeople = people.filter((person) => person.age <= 25);
console.log(newPeople);
const newPeople2 = people.filter((person) => person.position === "developer");
console.log(newPeople2[0].position);
const newPeople3 = people.filter((person) => person.name === "bob");
console.log(newPeople3[0].name);
// no match
const newPeople4 = people.filter((person) => person.position === "Dev");
console.log(newPeople4);
// find
const newPeople5 = people.find((person) => person.name === "bob");
console.log(newPeople5);
const newPeople6 = peopleArray.filter((person) => person === "peter");
console.log(newPeople6);
// try to get anything with peter in it
const newPeople7 = peopleArray.filter((person) => person.includes("peter"));
console.log(newPeople7);
const newPeople8 = peopleArray.find((person) => person.includes("peter"));
console.log(newPeople8);
// no match
const newPeople9 = peopleArray.filter((person) => person.includes("peter"));
console.log(newPeople9);
// multiple matches
const newPeople10 = people.filter((person) => person.age <= 25);
console.log(newPeople10);
const newPeople11 = people.find((person) => person.age <= 25);
console.log(newPeople11);

const newPeople12 = peopleArray.filter((person) => person === "peter");
console.log(newPeople12);
const newPeople13 = peopleArray.find((person) => person === "peter");
console.log(newPeople13);

const newPeople14 = people.filter((person) => person.name === "peter");
console.log(newPeople14);
const newPeople15 = people.find((person) => person.name === "peter");
console.log(newPeople15);

const newPeople16 = people.filter((person) => person.name === "peter");
console.log(newPeople16[0].name);
const newPeople17 = people.find((person) => person.name === "peter");
console.log(newPeople17.name);
