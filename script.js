const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const main = document.getElementById("main");
const gifContainer = document.getElementById("gifContainer");

/* YES button behavior */
yesBtn.addEventListener("click", () => {
  main.style.display = "none";
  gifContainer.style.display = "flex";

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 80,
      origin: { x: 0 }
    });

  confetti({
      particleCount: 150,
      angle: 120,
      spread: 80,
      origin: { x: 1 }
    });
  }, 300);
    
});

/* NO button escape behavior */
noBtn.addEventListener("mouseenter", () => {
  const rect = noBtn.getBoundingClientRect();

  // Lock current position
  noBtn.style.position = "fixed";
  noBtn.style.left = rect.left + "px";
  noBtn.style.top = rect.top + "px";

  // Move randomly inside viewport
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
