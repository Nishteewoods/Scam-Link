const noBtn = document.getElementById("noBtn");
const shyText = document.getElementById("shyText");

let hoverCount = 0;

noBtn.addEventListener("mouseover", () => {
  hoverCount++;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (hoverCount >= 3) {
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

