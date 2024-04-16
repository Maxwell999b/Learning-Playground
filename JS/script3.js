// Javascript Nuggets - Spread Operator
// https://youtu.be/4Zyr5a3m0Fc?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ

const string = "CODING";

const letters = [...string];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];
const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

const newFriend = [...friends];
newFriend[(0, 6)] = "mike";
console.log(friends);
console.log(newFriend);

// ES2018 - ES8

const person = { name: "john", job: "developer" };
const newPerson = { ...person, name: "mike", city: "new york" };
console.log(person);
console.log(newPerson);
