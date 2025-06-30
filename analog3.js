const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
// const outerClockFace = document.querySelector('.outer-clock-face');


// function addNumbers() {
//   for (let i = 1; i <= 12; i++) {
//     const number = document.createElement('div');
//     number.classList.add('number');
//     number.style.setProperty('--rotation', i * 30);
//     number.textContent = i;
//     outerClockFace.appendChild(number);
//   }
// }


function setDate() {
  const now = new Date();

  
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  
  const mins = now.getMinutes();
  const minDegree = (mins / 60) * 360 + (seconds / 360) * 6 + 90;
  minsHand.style.transform = `rotate(${minDegree}deg)`;

  
  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  
  const audio = document.getElementById("myAudio");
  if (audio) {
    audio.play();
  }
}


// addNumbers();


setInterval(setDate, 1000);
setDate();


