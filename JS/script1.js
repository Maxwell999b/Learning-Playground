// Javascript Nuggets - Destructuring (object)
// url = https://youtu.be/i4vhNKihfto?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ

const Max = {
  first: "max",
  last: "well",
  age: 25,
  jobs: {
    first: "Engineer",
    last: "Programmer",
  },
};

const {
  first: firstName,
  last: lastName,
  age,
  jobs: { first: firstJob },
} = Max;
console.log(firstName, lastName, age, firstJob);

function printMax({ first, last, age, jobs: { first: firstJob, last: lastJob } }) {
  console.log(
    `my first name is : ${first},
    my last name is : ${last},
    my age is : ${age},
    my first job is ${firstJob},
    my last job is ${lastJob}`
  );
}
printMax(Max);
