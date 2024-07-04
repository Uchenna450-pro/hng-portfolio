document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTCElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  const updateTime = () => {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });

    currentTimeUTCElement.textContent = utcTime;
    currentDayElement.textContent = dayOfWeek;
  };
  const toggle = elem => {
    if (elem.classList.contains("slide")) {
      elem.classList.remove("slide");
    } else {
      elem.classList.add("slide");
    }
  };
  document.getElementById("x").onclick = () => toggle(document.getElementById("nav-links"));

  updateTime();
  setInterval(updateTime, 1000);
});
