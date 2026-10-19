const form = document.querySelector("#contact");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const result = document.querySelector("#result");
 
form.addEventListener("submit", function (event) {
  event.preventDefault();
 
  if (nameInput.value === "") {
    alert("Пожалуйста, введите имя");
    result.textContent = "Ошибка: нет имени";
    return;  // дальше код не выполняем
  }
 
  if (emailInput.value === "") {
    alert("Пожалуйста, введите email");
    result.textContent = "Ошибка: нет email";
    return;
  }
 
  // если оба поля заполнены
  result.textContent = "Спасибо, " + nameInput.value + "! Сообщение принято.";
  console.log("Имя:", nameInput.value);
  console.log("Email:", emailInput.value);
  console.log("Текст:", messageInput.value);
});
if (messageInput.value === "") {
  alert("Напишите текст сообщения");
  return;}
  