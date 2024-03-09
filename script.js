const inputEmail = document.getElementById("inputEmail");

inputEmail.addEventListener("keyup", () => {
  if (inputEmail.value != "") {
    return;
  }
  const errorCanBe = document.querySelectorAll(".error-can-be");
  for (let errorSet of errorCanBe) {
    errorSet.classList.remove("error");
  }
  const successText = document.getElementById("success");
  successText.classList.remove("success");
});

function validateForm() {
  const successText = document.getElementById("success");
  const errorCanBe = document.querySelectorAll(".error-can-be");
  const emailValidatorRegex =
    /^[a-z]([a-z0-9]*[._-]{0,1}[a-z0-9]+){3,}@[a-z]([a-z0-9]*[-]{0,1}[a-z0-9]+){3,}\.[a-z]{2,4}$/;
  if (inputEmail.value.match(emailValidatorRegex)) {
    for (let errorSet of errorCanBe) {
      errorSet.classList.remove("error");
    }
    successText.classList.add("success");
    return false;
  }
  for (let errorSet of errorCanBe) {
    errorSet.classList.add("error");
  }
  successText.classList.remove("success");
  return false;
}
