// 13-callback-function
// https://youtu.be/GWq0XETTOTk?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ

function orderPizza(callback) {
  setTimeout(() => {
    const pizza = "🍕";
    callback(pizza);
    console.log("the pizza is Ready");
  }, 2000);
}
function pizzaReady(pizza) {
  console.log(`Eat the ${pizza}`);
  console.log("Call the someoneelse");
}
orderPizza(pizzaReady);
console.log("Call the cli");
