function CalculateAge() {
  // Get user input
  var dob = new Date(document.getElementById("dob").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);

  // Calculate current date
  var currentDate = new Date();

  // Calculate age
  var age = currentDate.getFullYear() - year;
  if (
    currentDate.getMonth() < month ||
    (currentDate.getMonth() == month && currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
}

// Input data validation
function Validation() {
  var date = document.frm.dob;
  var month = document.frm.month;
  var year = document.frm.year;

  if (inputDataValidation(date, month, year)) {
    if (dateValidation(date)) {
      if (yearValidation(year)) {
        alert("Your age is calculated");
        // Display age
        document.getElementById("result").innerHTML =
          "Your age is " + CalculateAge() + " years.";
      }
    }
  }

  return false;
}

// Check all input fields are empty or not
function inputDataValidation(date, month, year) {
  if (date.value == "" || month.value == "" || year.value == "") {
    alert("Please fill all input fields.");
    date.focus();
    return false;
  }
  return true;
}

// Date validation
function dateValidation(date) {
  if (date.value > 0 && date.value <= 31) {
    return true;
  }
  alert("Date must be less than or equal to 31");
  date.focus();
  return false;
}

// year validation
function yearValidation(year) {
  // Calculate current date
  var currentDate = new Date();
  console.log(currentDate.getFullYear());

  if (year.value.length != 4 || year.value > currentDate.getFullYear()) {
    alert("Year is not valid");
    year.focus();
    return false;
  }
  return true;
}
