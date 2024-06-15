//  Javascript Nuggets
// fetch-api
// https://youtu.be/C_VIKzfpRrg?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ

const url = "https://www.course-api.com/react-tours-project";

// console.log(fetch(url));

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const fetching = async () => {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     console.log(data);
//   } catch (error) {
//     console.log(`Error from the Catch Block : ${error}`);
//   }
// };
// fetching();

const fetching = async () => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      const msg = `Try Block : ${resp.status}  ${resp.statusText} `;
      throw new Error(msg);
    }

    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(`Error from the Catch Block : ${error}`);
  }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", fetching);
