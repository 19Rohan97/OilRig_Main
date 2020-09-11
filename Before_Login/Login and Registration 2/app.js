const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const form = document.getElementById("form");
const usernameSignup = document.getElementById("username-signup");
const email = document.getElementById("email");
const passwordSignup = document.getElementById("password-signup");
const passwordSignup2 = document.getElementById("password2-signup");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // const request = new XMLHttpRequest();

  // request.open("post", "Sign-up.php");
  // request.onload = function () {
  //   console.log(request.responseText);
  // };
  // request.send(new FormData(form));

  checkUsername();
  checkEmail();
  checkPassword();
  password2check();
});

// USERNAME CHECK

function checkUsername() {
  // get values from the inputs
  const usernameValue = usernameSignup.value.trim();

  if (usernameValue === "") {
    // show error
    // add error class
    setErrorFor(usernameSignup, "Username cannot be blank");
  } else {
    // add success class
    setSuccessFor(usernameSignup);
    return true;
  }
}

// EMAIL CHECK

function checkEmail() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    // show error
    // add error class
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    // add success class
    setSuccessFor(email);
    return true;
  }
}

// PASSWORD CHECK

function checkPassword() {
  const passwordValue = passwordSignup.value.trim();

  if (passwordValue === "") {
    // show error
    // add error class
    setErrorFor(passwordSignup, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    setErrorFor(passwordSignup, "Password is not strong enough");
  } else {
    // add success class
    setSuccessFor(passwordSignup);
    return true;
  }
}

// PASSWORD RE-CHECK

function password2check() {
  const passwordValue = passwordSignup.value.trim();
  const password2Value = passwordSignup2.value.trim();

  if (password2Value === "") {
    // show error
    // add error class
    setErrorFor(passwordSignup2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(passwordSignup2, "Password entered does not match");
  } else {
    // add success class
    setSuccessFor(passwordSignup2);
    return true;
  }
}

function validation() {
  if (
    checkUsername() == true &&
    checkEmail === true &&
    checkPassword === true &&
    password2check === true
  ) {
    window.location.reload();
    // var r = confirm("Successful Message!");
    // if (r == true) {

    // }
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "input-field error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "input-field success";
}

function isEmail(emailValue) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailValue
  );
}
