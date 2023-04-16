let showResult = document.getElementById("result");
let web = document.getElementById("web");
let maths = document.getElementById("maths");
let comp = document.getElementById("comp");
let phy = document.getElementById("phy");

let grades = "";
let totalGrades = 0;
let percentage = 0;

showResult.addEventListener("click", function () {
  // Check if any input fields are empty
  if (
    web.value === "" ||
    maths.value === "" ||
    comp.value === "" ||
    phy.value === ""
  ) {
    document.querySelector("#showData").innerHTML =
      "Please enter all the fields";
    return;
  }

  // Calculate the total grades and percentage
  totalGrades =
    parseFloat(web.value) +
    parseFloat(maths.value) +
    parseFloat(comp.value) +
    parseFloat(phy.value);
  percentage = (totalGrades / 400) * 100;

  // Determine the grade based on percentage
  if (percentage >= 80) {
    grades = "A";
  } else if (percentage >= 60) {
    grades = "B";
  } else if (percentage >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }

  // Check if the student passed or failed
  if (percentage >= 40) {
    document.querySelector(
      "#showData"
    ).innerHTML = `Out of 400 your total is ${totalGrades} and 
    percentage is ${percentage}%. <br>
    Your grade is ${grades}. You passed!`;
  } else {
    document.querySelector(
      "#showData"
    ).innerHTML = `Out of 400 your total is ${totalGrades} and 
    percentage is ${percentage}%. <br>
    Your grade is ${grades}. You failed!`;
  }
});
