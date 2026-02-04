const noBtn = document.getElementById("noBtn");
const shyText = document.getElementById("shyText");

let hoverCount = 0;

noBtn.addEventListener("mouseenter", () => {
  hoverCount++;

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.transition = "left 0.25s ease, top 0.25s ease";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (hoverCount >= 2) {
    shyText.classList.remove("hidden");
  }
});

function yesClicked() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      font-family:Arial;
      font-size:28px;
    ">
      ❤️ Yay! ❤️
    </div>
  `;
}

