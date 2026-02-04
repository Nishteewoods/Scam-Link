const noBtn = document.getElementById("noBtn");
const shyText = document.getElementById("shyText");
const yayGif = document.getElementById("yayGif");
const confettiContainer = document.getElementById("confetti-container");
const heartsContainer = document.getElementById("hearts-container");

let hoverCount = 0;

// Move No button randomly with bounce
noBtn.addEventListener("mouseover", () => {
  hoverCount++;

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Bounce effect
  noBtn.classList.remove("bounce");
  void noBtn.offsetWidth; // reflow to restart animation
  noBtn.classList.add("bounce");

  if (hoverCount >= 3) {
    shyText.classList.remove("hidden");
  }
});

// Show GIF + confetti on Yes
function yesClicked() {
  document.querySelector(".buttons").classList.add("hidden");
  shyText.classList.add("hidden");
  yayGif.classList.remove("hidden");

  // Generate confetti
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
}

// Confetti functions
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  
  confetti.style.backgroundColor = randomColor();
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.top = "-10px";
  confetti.style.width = 5 + Math.random() * 10 + "px";
  confetti.style.height = confetti.style.width;

  confettiContainer.appendChild(confetti);

  let fallDuration = 3 + Math.random() * 2; // seconds
  confetti.animate(
    [
      { transform: "translateY(0px) rotate(0deg)" },
      { transform: `translateY(${window.innerHeight + 10}px) rotate(${Math.random() * 360}deg)` }
    ],
    {
      duration: fallDuration * 1000,
      iterations: 1,
      easing: "linear"
    }
  );

  setTimeout(() => {
    confetti.remove();
  }, fallDuration * 1000);
}

function randomColor() {
  const colors = ["#e91e63", "#ffeb3b", "#4caf50", "#2196f3", "#ff5722"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Background hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Random horizontal position across full width
  heart.style.left = Math.random() * window.innerWidth + "px";

  // Random size between 10px and 25px
  const size = 10 + Math.random() * 15;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.borderRadius = size / 2 + "px";

  // Random speed between 4s and 7s
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  heartsContainer.appendChild(heart);

  // Remove heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, parseFloat(heart.style.animationDuration) * 1000);
}

// Create hearts continuously
setInterval(createHeart, 300); // spawn every 0.3s for full screen coverage

