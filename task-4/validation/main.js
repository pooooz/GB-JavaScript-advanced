const form = document.querySelector("form");

const nameInput = form.querySelector(".name-input");
const phoneInput = form.querySelector(".phone-input");
const emailInput = form.querySelector(".email-input");

document.querySelector("button").addEventListener("click", () => {
  if (/^[А-ЯЁA-Z][а-яёa-z]+$/.test(nameInput.value)) {
    nameInput.classList.remove("warning");
  } else {
    nameInput.classList.add("warning");
  }

  if (/\+7\(\d{3}\)\d{3}-\d{4}/.test(phoneInput.value)) {
    phoneInput.classList.remove("warning");
  } else {
    phoneInput.classList.add("warning");
  }

  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(emailInput.value)) {
    emailInput.classList.remove("warning");
  } else {
    emailInput.classList.add("warning");
  }
});