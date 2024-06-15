// ################################ \1/ ###################################################
// const nameInput = document.querySelector(".name-input");
// const emailInput = document.querySelector(".email-input");
// const passwordInput = document.querySelector(".password-input");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const nameValue = nameInput.value;
//   const emailValue = emailInput.value;
//   const passwordValue = passwordInput.value;

//   // Check for empty values
//   if (!nameValue || !emailValue || !passwordValue) {
//     console.log("Please provide values");
//     return;
//   }

//   // Do something
//   console.log(nameValue, emailValue, passwordValue);

//   // After that clear values
//   nameInput.value = "";
//   emailInput.value = "";
//   passwordInput.value = "";
// });

// ################################ \2/ ###################################################

// const form = document.querySelector(".form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   //   console.log(formData);
//   const values = [...formData.values()];

//   if (values.includes("")) {
//     console.log("please enter all values");
//     return;
//   }
//   const formObject = Object.fromEntries(formData);
//   // do something
//   console.log(formObject);

//   e.currentTarget.reset();
// });

// ################################ \3/ ###################################################
// const form = document.querySelector("form");

// // Valid approach to create a FormData instance from the form
// const formData = new FormData(form);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.currentTarget);

//   // Check for value
//   const name = formData.get("name");
//   console.log(name);

//   // Append a new field
//   formData.append("test", "test");

//   // Delete fields
//   formData.delete("test");
//   formData.delete("email");

//   // Check if a field exists
//   const checkName = formData.has("name");
//   console.log(checkName);

//   // Get all entries as an array
//   const entries = [...formData.entries()];
//   console.log(entries);
// });

// ################################ \4/ ###################################################
// const form = document.querySelector(".form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);

//   const name = formData.get("name");
//   console.log(name);

//   formData.append("test", "testValue");
//   formData.delete("email");

//   const hasName = formData.has("name");
//   console.log(hasName);

//   const entries = [...formData.entries()];
//   console.log(entries);
// });

// ################################ \5/ ###################################################

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  //   const entries = [...formData.entries()];
  //   console.log(entries);

  const formObject = Object.fromEntries(formData);
  console.log(formObject);

  // axios.post('someUrl', formData);
  // axios.post('someUrl', formObject);

  e.currentTarget.reset();
});

// ################################ \?/ ###################################################

// const form = document.querySelector(".form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   //   console.log(formData);
//   //   console.log(e);
//   //   console.log(e.currentTarget);
// });
