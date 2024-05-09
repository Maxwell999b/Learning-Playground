document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  document.querySelector(".btn").addEventListener("click", () => {
    const inputElement = document.querySelector("input[name='Testing The JS ']");
    if (inputElement) {
      inputElement.value = "Hello World";
    } else {
      console.error("Input element not found.");
    }
  });
});
