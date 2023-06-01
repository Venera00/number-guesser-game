let min = 1,
  max = 10,
  winningNum = Math.floor(Math.random() * 10 + 1),
  guessesLeft = 2;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);
  
    if (isNaN(guess) || guess < min || guess > max) {
      setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
    }
  
    if (guess === winningNum) {
      guessInput.disabled = true;
      guessInput.style.border = "2px solid green";
      setMessage(`Поздравляем вы выиграли `, "green");
  
      let newGameBtn = (guessBtn.innerHTML = "Новая игра");
      if (newGameBtn) {
        guessBtn.addEventListener("click", function () {
          location.reload();
        });
      }
    } else {
      guessInput.style.border = "3px solid red";
      message.style.color = "red";
      message.textContent = `Вы не угадали, попыток осталось:  ${guessesLeft}`;
      guessInput.value = "";
    }