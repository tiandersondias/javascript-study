//Onclick
document.addEventListener("DOMContentLoaded", () => {
  //By default, submit button is disabled
  document.querySelector("#submit").disabled = true;
  document.querySelector("#task").onkeyup = () => {
    //Logical Condition
    if (document.querySelector("#task").value.length > 0) {
      document.querySelector("#submit").disabled = false;
    } else {
      document.querySelector("#submit").disabled = true;
    }
  };

  document.querySelector("select").onchange = function () {
    document.querySelector("#inventory").style.color = this.value;
  };
});

//Onclick
const clickButton = document.querySelector("#clickButton");
const clickCountElement = document.querySelector("#clickCount");
let clickCount = 0;

clickButton.addEventListener("click", () => {
  clickCount++;
  clickCountElement.textContent = clickCount;
});

//Insert HTML Element
document.querySelector("form").onsubmit = () => {
  const task = document.querySelector("#task").value;

  const li = document.createElement("li");
  li.innerHTML = task;
  document.querySelector("#tasks").append(li);
  document.querySelector("#task").value = "";
  document.querySelector("#submit").disabled = true;

  // Stop form from submitting
  return false;
  
};
//Counter Seconds Function
/**
 * Function 
 */
function count() {
  let counter = localStorage.getItem("clicks");
  counter++;
  document.querySelector("#counter").innerHTML = counter;
  localStorage.setItem("clicks", counter);
}
document.addEventListener("DOMContentLoaded", function () {
    setInterval(count, 1000);
});