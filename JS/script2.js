// Javascript Nuggets - Map
// https://youtu.be/80KX6aD9R7M?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ

const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];

const getAges = (person) => person.age;
const Ages = () => people.map(getAges);
console.log(Ages());

const Names = () => people.map((person) => person.name);
console.log(Names());

const newPeople = () =>
  people.map((person) => ({
    firstName: person.name.toUpperCase(),
    nextYearAge: person.age + 1,
  }));
console.log(newPeople());

const names = newPeople().map((person) => `<h2>${person.firstName} ${person.nextYearAge}</h2>`);
const result = document.querySelector(".result");

result.innerHTML = names.join("");
