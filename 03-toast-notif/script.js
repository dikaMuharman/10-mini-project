const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});

const createNotification = () => {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerHTML = "Hello this is notification";

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
};
