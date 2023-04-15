const calculate = () => {
  wd;
  let web = document.getElementById("web");
  let maths = document.getElementById("math");
  let comp = document.getElementById("comp");
  let phy = document.getElementById("phy");

  let grades = "";

  //   Input  is string s typecasting is necessary

  let totalgrades =
    parseFloat(web) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
};

// Checking the condition for the providing the grade to student based on percentage

let percentage = (totalgrade / 400) * 100;
if (totalgrade <= 100 && percentage >= 80) {
  grades = "A";
} else if (totalgrade <= 79 && percentage >= 60) {
  grades = "B";
} else if (totalgrade <= 59 && percentage >= 40) {
  grades = "C";
} else {
  grades = "F";
}

// Checking the values are empty if empty than show please fill them

if (web == "" || hindi == "" || maths == "" || comp == "" || phy == "") {
  document.querySelector("#showData").innerHTML = "Please enter all the fields";
} else {
  // Checking the condition for the fail and pass
  if (percentage >= 39.5) {
    document.querySelector(
      "#showData"
    ).innerHTML = `Out of 400 your total is ${totalgrades} and 
		percentage is ${percentage}%. <br>
		Your grade is ${grades}. You are Pass `;
  } else {
    document.querySelector(
      "#showData"
    ).innerHTML = ` Out of 400 your total is  ${totalgrades} 
        and percentage is ${percentage}%. <br> 
        Your grade is ${grades}. You are Fail. `;
  }
}
