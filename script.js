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

  $("#x").click(() => $(".nav-links").slideToggle(300));

  updateTime();
  setInterval(updateTime, 1000);
});
