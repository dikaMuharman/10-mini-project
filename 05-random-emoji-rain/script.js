function heart() {
  const emoji = ["🖖", "🖕", "👌", "👋", "🤘", "👍", "👎", "🤟"];

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = `${emoji[Math.floor(Math.random() * emoji.length)]}`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(heart, 300);
