// Swap between Login & Signup
var formContainer = document.querySelector(".form-container");
var swapSignup = document.querySelector("#swap-signup");
var swapLogin = document.querySelector("#swap-login");

swapSignup.addEventListener("click", function () {
  formContainer.classList.add("swap");
});
swapLogin.addEventListener("click", function () {
  formContainer.classList.remove("swap");
});

// ======================= Validation =========================
var loginInputs = document.querySelectorAll(".login-form input");
var loginEmail = document.querySelector("#loginEmail");
var loginPassword = document.querySelector("#loginPassword");
var loginBtn = document.querySelector("#loginBtn");

var signupInputs = document.querySelectorAll(".signup-form input");
var signupName = document.querySelector(".signup-form #name");
var signupEmail = document.querySelector("#signupEmail");
var signupPassword = document.querySelector("#signupPassword");
var signupBtn = document.querySelector("#signupBtn");

var passwordInputs = document.querySelectorAll("[name='password']");

var users = [];
var currentUser = "";

// Url pattern
var urlSplit = location.href.split("/");
var url = "";
for (var i = 0; i < urlSplit.length - 1; i++) {
  url += urlSplit[i] + "/";
}

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}
if (localStorage.getItem("currentUser") !== null) {
  currentUser = localStorage.getItem("currentUser");
  location.assign(url + "welcome.html");
}

// Validation RegExp Patterns
var regExpPatterns = {
  name: /^([A-Za-z]+([ ]?[A-Za-z]+)*){5,20}$/,
  email:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
};

// Validate Signup form to save data to users
signupBtn.addEventListener("click", signupUser);

function signupUser() {
  for (var i = 0; i < signupInputs.length; i++) {
    checkInputValidation(
      signupInputs[i],
      signupInputs[i].getAttribute("name"),
      signupInputs[i].value
    );
  }
  var user = {
    name: signupName.value,
    email: signupEmail.value.toLowerCase(),
    password: signupPassword.value,
  };

  if (!checkSignupValidate()) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Use valid data to signup.",
    });
    return;
  }

  if (checkUsedEmail(user.email)) {
    return;
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  clearSignupInputs();
  formContainer.classList.remove("swap");

  signupDonePopup();
}

function checkSignupValidate() {
  var validName = regExpPatterns.name.test(signupName.value);
  var validEmail = regExpPatterns.email.test(signupEmail.value);
  var validPassword = regExpPatterns.password.test(signupPassword.value);

  return validName && validEmail && validPassword;
}

function checkInputValidation(input, inputType, inputValue) {
  var validInput = regExpPatterns[inputType].test(inputValue);

  if (validInput) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    // document.querySelector(`#${input.id} ~ .feedback`).classList.add("d-none");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    // document
    //   .querySelector(`#${input.id} ~ .feedback`)
    //   .classList.remove("d-none");
  }
}

function checkInputValidationFeedback(input, inputType, inputValue, status) {
  if (status == "focus") {
    document
      .querySelector(`#${input.id} ~ .feedback`)
      .classList.remove("d-none");
  } else {
    document.querySelector(`#${input.id} ~ .feedback`).classList.add("d-none");
  }
}

for (var i = 0; i < signupInputs.length; i++) {
  signupInputs[i].addEventListener("input", function (e) {
    // console.log(e.target.getAttribute("placeholder").toLowerCase());
    checkInputValidation(
      e.target,
      e.target.getAttribute("name"),
      e.target.value
    );
  });

  signupInputs[i].addEventListener("focus", function (e) {
    checkInputValidationFeedback(
      e.target,
      e.target.getAttribute("name"),
      e.target.value,
      "focus"
    );
  });

  signupInputs[i].addEventListener("blur", function (e) {
    checkInputValidationFeedback(
      e.target,
      e.target.getAttribute("name"),
      e.target.value,
      "blur"
    );
  });

  signupInputs[i].addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      signupUser();
    }
  });
}

// show password
signupPassword.addEventListener("input", function () {
  document.querySelector("#signupPassword + .icon").classList.add("d-none");
  document.querySelector(".signup-form .show-hide").classList.remove("d-none");
});
document
  .querySelector(".signup-form .show-hide")
  .addEventListener("mousedown", function () {
    document.querySelector(
      ".signup-form .show-hide"
    ).innerHTML = `<i class="fa-solid fa-eye"></i>`;
    signupPassword.setAttribute("type", "text");
  });
document
  .querySelector(".signup-form .show-hide")
  .addEventListener("mouseup", function () {
    document.querySelector(
      ".signup-form .show-hide"
    ).innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    signupPassword.setAttribute("type", "password");
  });

loginPassword.addEventListener("input", function () {
  document.querySelector("#loginPassword + .icon").classList.add("d-none");
  document.querySelector(".login-form .show-hide").classList.remove("d-none");
});
document
  .querySelector(".login-form .show-hide")
  .addEventListener("mousedown", function () {
    document.querySelector(
      ".login-form .show-hide"
    ).innerHTML = `<i class="fa-solid fa-eye"></i>`;
    loginPassword.setAttribute("type", "text");
  });
document
  .querySelector(".login-form .show-hide")
  .addEventListener("mouseup", function () {
    document.querySelector(
      ".login-form .show-hide"
    ).innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    loginPassword.setAttribute("type", "password");
  });

// for (var i = 0; i < passwordInputs.length; i++) {
//   console.log(passwordInputs[i].id);

//   // var id;

//   passwordInputs[i].addEventListener("input", function (e) {
//     document.querySelector(`#${e.target.id} + .icon`).classList.add("d-none");
//     document
//       .querySelector(`#${e.target.id} ~ .show-hide`)
//       .classList.remove("d-none");
//   });

//   document
//     .querySelector(`[id="${passwordInputs[i].id}"] + .show-hide `)
//     .addEventListener("mousedown", function () {
//       // console.log(e);

//       document.querySelector(
//         `#${passwordInputs[i].id} + .show-hide`
//       ).innerHTML = `<i class="fa-solid fa-eye"></i>`;
//       // e.target.innerHTML = `<i class="fa-solid fa-eye"></i>`;
//       document
//         .querySelector(`#${passwordInputs[i].id}`)
//         .setAttribute("type", "text");
//       // passwordInputs[i].setAttribute("type", "text");
//     });

//   // document
//   //   .querySelector(".show-hide")
//   //   .addEventListener("mouseup", function (e) {
//   //     e.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
//   //     passwordInputs[i].setAttribute("type", "password");
//   //   });
// }

// Check if email is used
function checkUsedEmail(value) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == value.toLowerCase()) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success mx-2",
          cancelButton: "btn btn-danger mx-2",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "This Email is already used",
          icon: "error",
          showCancelButton: true,
          confirmButtonText: "Login",
          cancelButtonText: "cancel",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            clearSignupInputs();
            formContainer.classList.remove("swap");
          }
        });

      return true;
    }
  }
  return false;
}
function signupDonePopup() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Signed up successfully",
  });
}

// Clear inputs on submit
function clearSignupInputs() {
  for (var i = 0; i < signupInputs.length; i++) {
    signupInputs[i].value = "";
    signupInputs[i].classList.remove("is-valid");
  }
}
function clearLoginInputs() {
  loginEmail.value = "";
  loginPassword.value = "";
}

// ========================== Login ======================
function checkLoginInputs() {
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].email.toLowerCase() == loginEmail.value &&
      users[i].password == loginPassword.value
    ) {
      currentUser = users[i].name;
      console.log(currentUser);

      localStorage.setItem("currentUser", currentUser);
      return true;
    }
  }
  return false;
}
function checkEmptyInputs() {
  if (loginEmail.value == "" || loginPassword.value == "") {
    return true;
  }
  return false;
}

loginBtn.addEventListener("click", function () {
  if (checkEmptyInputs()) {
    document.querySelector("#loginError").innerText = "All fields are required";
    loginEmail.classList.add("is-invalid");
    loginPassword.classList.add("is-invalid");
    return;
  }
  if (!checkLoginInputs()) {
    document.querySelector("#loginError").innerText =
      "Invalid Email or Password";
    loginEmail.classList.add("is-invalid");
    loginPassword.classList.add("is-invalid");
    return;
  }

  location.assign(url + "welcome.html");
  // location.assign(location.href + "welcome.html");

  clearLoginInputs();
});

for (var i = 0; i < loginInputs.length; i++) {
  loginInputs[i].addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      loginBtn.click();
    }
  });
}

console.log(location.pathname);

// Loading page
window.addEventListener("load", function () {
  document.querySelector("#loader").classList.add("loader-out");
  setTimeout(removeLoader, 1000);
});
function removeLoader() {
  document.querySelector("#loader").classList.add("d-none");
}
