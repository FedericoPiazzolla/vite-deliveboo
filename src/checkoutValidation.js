// validationFunctions.js

const onlyLettersPattern = /^[a-zA-Z ]+$/;
const onlyNumbersPattern = /^[0-9]+$/;
const numbersLettersPattern = /^[A-Za-z0-9 ]+$/;
const addressPattern = /^[A-Za-z0-9 ,]+$/;
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export function checkName() {
  let name = document.getElementById("interested_user_name").value;
  let errorSpan = document.getElementById("nameError");

  if (!onlyLettersPattern.test(name)) {
    errorSpan.textContent = "Il campo può contenere solo lettere";
  } else {
    errorSpan.textContent = "";
  }
  if (name === "") {
    errorSpan.textContent = "Il campo deve essere compilato";
  }
}

export function checkSurname() {
  console.log("crivo");
  let surname = document.getElementById("interested_user_surname").value;
  let errorSpan = document.getElementById("surnameError");

  if (!onlyLettersPattern.test(surname)) {
    errorSpan.textContent = "Il campo può contenere solo lettere";
  } else {
    errorSpan.textContent = "";
  }
  if (surname === "") {
    errorSpan.textContent = "Il campo deve essere compilato";
  }
}

export function checkAddress() {
  let address = document.getElementById("interested_user_address").value;
  let errorSpan = document.getElementById("addressError");

  if (!addressPattern.test(address)) {
    errorSpan.textContent = "Il campo può contenere solo lettere o numeri";
  } else {
    errorSpan.textContent = "";
  }
  if (address === "") {
    errorSpan.textContent = "Il campo deve essere compilato";
  }
}

export function checkEmail() {
  let email = document.getElementById("interested_user_email").value;
  let errorSpan = document.getElementById("emailError");

  if (!emailPattern.test(email)) {
    errorSpan.textContent = "Il campo deve essere una mail";
  } else {
    errorSpan.textContent = "";
  }
  if (email === "") {
    errorSpan.textContent = "Il campo deve essere compilato";
  }
}

export function checkPhoneNumber(event) {
  console.log("scrivo");
  let phoneNumber = document.getElementById("interested_user_phone").value;
  let errorSpan = document.getElementById("numberError");

  if (!onlyNumbersPattern.test(phoneNumber)) {
    errorSpan.textContent = "Il campo può contenere solo numeri";
  } else {
    errorSpan.textContent = "";
  }
  if (phoneNumber === "") {
    errorSpan.textContent = "Il campo deve essere compilato";
  }
}

// Funzione per scrollare la pagina
export function scrollToDivWithOffset(div) {
  const offset = 140;
  const element = document.getElementById(div);
  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export function formControl(event) {
  let nameError = document.getElementById("nameError").textContent;
  let surnameError = document.getElementById("surnameError").textContent;
  let addressError = document.getElementById("addressError").textContent;
  let emailError = document.getElementById("emailError").textContent;
  let phoneError = document.getElementById("numberError").textContent;

  let nameInput = document.getElementById("interested_user_name").value;
  let surnameInput = document.getElementById("interested_user_surname").value;
  let addressInput = document.getElementById("interested_user_address").value;
  let emailInput = document.getElementById("interested_user_email").value;
  let phoneInput = document.getElementById("interested_user_phone").value;

  let inputsList = [
    nameInput,
    surnameInput,
    addressInput,
    emailInput,
    phoneInput,
  ];

  console.log(inputsList);

  let errorsList = [
    nameError,
    surnameError,
    addressError,
    emailError,
    phoneError,
  ];

  let hasErrors = false;
  for (let x = 0; x < errorsList.length; x++) {
    let formErrorMsg = document.getElementById("formError");
    formErrorMsg.textContent = "";
    if (errorsList[x] !== "" || inputsList[x] == "") {
      console.log("ciao");
      formErrorMsg.textContent = "Ricontrolla i tuoi dati!!";
      hasErrors = true;
      scrollToDivWithOffset("checkout-form");

      break;
    }
  }
  if (hasErrors === true) {
    event.preventDefault();
  }
}
