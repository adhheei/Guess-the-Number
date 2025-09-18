function guess() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let userGuess = parseInt(document.getElementById("Guess").value);
  let resultBox = document.getElementById("Result");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    resultBox.innerText = "⚠️ Enter a number between 1 and 10!";
    resultBox.className = "error";
    resultBox.style.display = "block";
    return;
  }

  if (userGuess === randomNumber) {
    resultBox.innerText = "🎉 Correct Guess! You Win!";
    resultBox.className = "success";
  } else {
    resultBox.innerText = `❌ Wrong Guess! The number was ${randomNumber}`;
    resultBox.className = "info";
  }

  resultBox.style.display = "block";
}
