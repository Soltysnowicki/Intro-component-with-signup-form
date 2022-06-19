//button
const submit = document.querySelector(".claim");
//first name
const first_name = document.querySelector(".first-name-container");
const error_message_first_name = document.querySelector(".error-message-1");
const error_sign_first_name = document.querySelector(".error-sign-1");
//last name
const last_name = document.querySelector(".last-name-container");
const error_message_last_name = document.querySelector(".error-message-2");
const error_sign_last_name = document.querySelector(".error-sign-2");
//email
const email_address = document.querySelector(".email-container");
const error_message_email = document.querySelector(".error-message-3");
const error_sign_email = document.querySelector(".error-sign-3");
//password
const password = document.querySelector(".password-container");
const error_message_password = document.querySelector(".error-message-4");
const error_sign_password = document.querySelector(".error-sign-4");

//email error function
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email_address.value.match(regex)) {
    console.log("ok");
    error_message_email.classList.add("hide");
    error_sign_email.classList.add("hide");
    email_address.classList.remove("active");
  } else {
    error_message_email.classList.remove("hide");
    error_sign_email.classList.remove("hide");
    email_address.classList.add("active");
  }
  if (first_name.value === "") {
    console.log("no first name");
    error_message_first_name.classList.remove("hide");
    error_sign_first_name.classList.remove("hide");
    first_name.classList.add("active");
  } else {
    error_message_first_name.classList.add("hide");
    error_sign_first_name.classList.add("hide");
    first_name.classList.remove("active");
  }
  if (last_name.value === "") {
    console.log("no last name");
    error_message_last_name.classList.remove("hide");
    error_sign_last_name.classList.remove("hide");
    last_name.classList.add("active");
  } else {
    error_message_last_name.classList.add("hide");
    error_sign_last_name.classList.add("hide");
    last_name.classList.remove("active");
  }
  if (password.value === "") {
    console.log("no password");
    error_message_password.classList.remove("hide");
    error_sign_password.classList.remove("hide");
    password.classList.add("active");
  } else {
    error_message_password.classList.add("hide");
    error_sign_password.classList.add("hide");
    password.classList.remove("active");
  }
});
