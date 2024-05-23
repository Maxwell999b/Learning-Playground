// ColorCode
// https://youtu.be/QSqc6MMS6Fk
// https://youtu.be/TnhCX0KkPqs
// https://youtu.be/spvYqO_Kp9Q
// https://youtu.be/ubw2hdQIl4E

// let weather;
// console.log(weather);
getWeather(weatherReceived);
getWeather(displayIcon);
// document.body.innerText = weather;
function displayIcon(data) {
  let icon;
  if (data === "sunny") {
    icon = "☀️";
  } else if (data === "cloudy") {
    icon = "☁️";
  }
  document.querySelector(".my-input-result").value = "Weather: " + data + icon;
}

function weatherReceived(data) {
  let weather = data;
  displayIcon(weather);
}

function getWeather(callback) {
  setTimeout(() => {
    callback("sunny");
  });
}

getWeather(weatherReceived);

// function getWeather() {
//   setTimeout(() => {
//     weather = "sunny";
//     document.body.innerText = weather;
//   });
// }

// function getWeather() {
//   return "sunny";
// }

// function getWeather() {
//   setTimeout(() => {
//     return "sunny"
//   })
// }

// const btn = document.getElementsByClassName("btn")[0];
// btn.addEventListener("click", function () {
//   console.log("Hello World");
// });

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log("Hello World");
// });
