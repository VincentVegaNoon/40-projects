const daysArea = document.querySelector(".days");
const hoursArea = document.querySelector(".hours");
const minutesArea = document.querySelector(".minutes");
const secondsArea = document.querySelector(".seconds");

function calculateTimeLeft() {
  const targetDate = new Date("2023-10-25T00:00:00Z");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysArea.innerHTML = `<span>${daysLeft < 10 ? "0" + daysLeft : daysLeft}</span> days`;
  hoursArea.innerHTML = `<span>${hoursLeft < 10 ? "0" + hoursLeft : hoursLeft}</span> hours`;
  minutesArea.innerHTML = `<span>${minutesLeft < 10 ? "0" + minutesLeft : minutesLeft}</span> mins`;
  secondsArea.innerHTML = `<span>${secondsLeft < 10 ? "0" + secondsLeft : secondsLeft}</span> secs`;
}

window.addEventListener("load", setInterval(calculateTimeLeft, 1000));
