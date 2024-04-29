// https://youtu.be/qhECs40xMec?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ
//Javascript Nuggets - Destructuring (Array)

// faster/easier way to access/unpack variables from arrays

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// const Enemy = friends;
// console.log(Enemy);
// Enemy[0] = "mike";
// console.log(Enemy);
// console.log(friends);
// reference variable change the original array

// const [a, b, c] = friends;
// console.log(a, b, c);
// console.log(a, b);
// console.log(a, c);

// const [a, , c, , , d] = friends;
// console.log(a, c, d);
// const [a1, b1, ...rest] = friends;
// console.log(a1, b1, rest);
// console.log(a1, ...rest);
// console.log(rest);
const [...allFriends] = friends;
console.log(allFriends);
allFriends[0] = "mike";
console.log(allFriends);
console.log(friends);
// reference variable change Doesn't change the original array bcs "..." not reference anymore
