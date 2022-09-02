import data from "./data.json" assert { type: "json" };

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

const dailyInfo = data.map((item) => item.timeframes.daily);
const weeklyInfo = data.map((item) => item.timeframes.weekly);
const monthlyInfo = data.map((item) => item.timeframes.monthly);

const activitySection = document.querySelector(".second-section");

const bgColor = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

const drawElements = (info) => {
  activitySection.innerHTML = "";
  data.forEach((activity, index) => {
    let html = `<div class="card">
          <div class="card__background" style="background-color: ${
            bgColor[index]
          } ">
            <img
              class="card__icon"
              src="./images/icon-${activity.title
                .toLowerCase()
                .replace(" ", "-")}.svg"
              alt="${activity.title.toLowerCase()} image"
            />
          </div>
          <div class="card__details">
            <div class="card__activity">
              <p class="card__title">${activity.title}</p>
              <img
                class="card__dots"
                src="./images/icon-ellipsis.svg"
                alt="three dots"
              />
            </div>
            <div class="card__time">
              <p class="card__hour">${info[index].current}hrs</p>
              <p class="card__previous">Previous - ${
                info[index].previous
              }hrs</p>
            </div>
          </div>
        </div>`;
    activitySection.insertAdjacentHTML("beforeend", html);
  });
};

dailyBtn.addEventListener("click", () => {
  drawElements(dailyInfo);
  dailyBtn.setAttribute("class", "main-card__frecuency--active");
  weeklyBtn.setAttribute("class", "main-card__frecuency");
  monthlyBtn.setAttribute("class", "main-card__frecuency");
  console.log(dailyBtn.getAttribute("class"));
  //   ("main-card__frecuency--active");
});

weeklyBtn.addEventListener("click", () => {
  drawElements(weeklyInfo);
  dailyBtn.setAttribute("class", "main-card__frecuency");
  weeklyBtn.setAttribute("class", "main-card__frecuency--active");
  monthlyBtn.setAttribute("class", "main-card__frecuency");
});

monthlyBtn.addEventListener("click", () => {
  drawElements(monthlyInfo);
  dailyBtn.setAttribute("class", "main-card__frecuency");
  weeklyBtn.setAttribute("class", "main-card__frecuency");
  monthlyBtn.setAttribute("class", "main-card__frecuency--active");
});
