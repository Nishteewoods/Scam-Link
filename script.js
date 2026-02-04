const noBtn = document.getElementById("noBtn");
const shyText = document.getElementById("shyText");
const confettiContainer = document.getElementById("confetti-container");
const heartsContainer = document.getElementById("hearts-container");

let hoverCount = 0;

// Move No button randomly but always inside window bounds
noBtn.addEventListener("mouseover", () => {
  hoverCount++;

  // Calculate max allowed position so button stays fully visible
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

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

// Show confetti on Yes
document.getElementById("yesBtn").addEventListener("click", () => {
  document.querySelector(".buttons").classList.add("hidden");
  shyText.classList.add("hidden");

  // Generate confetti
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
});

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

  heart.style.left = Math.random() * window.innerWidth + "px";

  const size = 10 + Math.random() * 15;
  heart.style.width = size + "px";
  heart.style.height = size + "px";
  heart.style.borderRadius = size / 2 + "px";

  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, parseFloat(heart.style.animationDuration) * 1000);
}

// Create hearts continuously
setInterval(createHeart, 300);

