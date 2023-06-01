var guessnum = document.querySelector(".input");
var btn = document.querySelector(".btn");
var message = document.querySelector(".message");
var message2 = document.querySelector(".message2");
let gameleft = 3;

var rn = parseInt(randomNumber());
let u;
btn.addEventListener("click", function () {
  u = guessnum.value;
  console.log(rn);
  gameleft--;
  console.log(gameleft);
  if (btn.innerText == "Submit") {
    if (gameleft == 0) {
      btn.innerText = "Play Again";
      message.innerText = u + " is not correct!! " + gameleft + " guess left";
    }
    if (u == rn) {
      message2.innerText = null;
      message.innerText = u + " is correct you won!!!";
      btn.innerText = "Play Again";
      message.style.color = "green";
    } else if (u !== rn && u <= 10 && gameleft > 0) {
      // gameleft--;
      console.log(gameleft);
      message.innerText = u + " is not correct!! " + gameleft + " guess left";
      message2.innerText = null;
      message.style.color = "red";
    } else if (u > 10 && u !== rn && gameleft > 0) {
      // gameleft--;
      console.log(gameleft);
      message.innerText = u + " is not correct!! " + gameleft + " guess left";
      message2.innerText = "Please enter number between 1 to 10";
      message.style.color = "red";
      message2.style.color = "red";
    }
  } else if (btn.innerText == "Play Again") {
    window.location.reload();
  }
});

function randomNumber() {
  return Math.random() * (10 - 1) + 1;
}
