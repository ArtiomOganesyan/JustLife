const healthCareInfo = [
  ["Hong Kong", 83.2, 87.9],
  ["Macao", 82.8, 87.9],
  ["Switzerland", 81.9, 85.9],
  ["Iceland", 81.8, 84.5],
  ["Norway", 81.7, 84.7],
  ["Japan", 81.5, 87.6],
  ["Sweden", 81.4, 85.0],
  ["Australia", 81.3, 85.4],
  ["Malta", 81.3, 84.5],
  ["Singapore", 81.1, 85.9],
  ["Luxembourg", 80.7, 84.9],
  ["Canada", 80.6, 84.7],
  ["Italy", 80.6, 85.1],
  ["South Korea", 80.6, 86.6],
  ["New Zealand", 80.5, 84.0],
  ["Israel", 80.5, 84.6],
  ["Spain", 80.3, 86.2],
  ["Ireland", 80.2, 84.1],
  ["Netherlands", 79.9, 83.1],
  ["Denmark", 79.6, 83.3],
  ["Belgium", 79.5, 84.4],
  ["Finland", 79.3, 84.7],
  ["France", 79.3, 85.5],
  ["Maldives", 79.1, 81.0],
  ["Austria", 78.8, 83.8],
  ["United Kingdom", 78.7, 82.8],
  ["Germany", 78.5, 83.4],
  ["Qatar", 78.3, 80.9],
  ["Portugal", 78.0, 84.3],
  ["Bahrain", 77.8, 80.0],
  ["Greece", 77.5, 83.0],
  ["United Arab Emirates", 77.2, 80.9],
  ["Kuwait", 77.2, 81.5],
  ["Chile", 76.5, 81.4],
  ["Puerto Rico", 75.9, 84.5],
  ["Bermuda", 75.8, 82.7],
  ["Saudi Arabia", 75.6, 78.8],
  ["China", 75.5, 81.2],
  ["Algeria", 74.9, 78.0],
  ["Thailand", 74.5, 83.0],
  ["Costa Rica", 74.4, 79.8],
  ["Czechia", 74.3, 80.6],
  ["Albania", 74.1, 79.2],
  ["United States", 73.5, 79.3],
  ["Croatia", 73.4, 79.6],
  ["Sri Lanka", 73.1, 79.5],
  ["Panama", 73.1, 79.6],
  ["Turkey", 73.0, 79.1],
  ["Lebanon", 72.8, 77.3],
  ["Malaysia", 72.7, 77.4],
  ["Brunei", 72.6, 76.9],
  ["Estonia", 72.4, 81.3],
  ["Argentina", 72.2, 78.6],
  ["Jordan", 72.1, 76.8],
  ["Morocco", 71.9, 76.4],
  ["Poland", 71.7, 79.7],
  ["Iran", 71.2, 76.8],
  ["Cuba", 71.2, 76.4],
  ["Hungary", 71.1, 78.0],
  ["Oman", 71.0, 74.7],
  ["North Korea", 70.8, 75.7],
  ["Montenegro", 70.8, 77.0],
  ["Bangladesh", 70.6, 74.3],
  ["Mauritius", 70.3, 77.2],
  ["Ecuador", 70.3, 77.5],
  ["Serbia", 70.0, 75.6],
  ["Lithuania", 69.9, 79.0],
  ["Brazil", 69.6, 76.0],
  ["Colombia", 69.4, 76.4],
  ["Romania", 69.4, 76.7],
  ["Dominican Republic", 69.3, 76.3],
  ["Vietnam", 69.1, 78.2],
  ["Syria", 69.1, 75.2],
  ["Latvia", 68.6, 78.2],
  ["Jamaica", 68.5, 72.5],
  ["Uzbekistan", 68.3, 73.4],
  ["Iraq", 68.2, 72.4],
  ["Bulgaria", 68.1, 75.1],
  ["Egypt", 67.9, 72.6],
  ["Philippines", 67.2, 71.5],
  ["Cambodia", 66.8, 72.3],
  ["Georgia", 66.8, 76.7],
  ["Nepal", 66.6, 70.4],
  ["Armenia", 66.6, 77.4],
  ["Mongolia", 66.5, 75.7],
  ["Kazakhstan", 66.3, 74.0],
  ["Venezuela", 66.3, 75.2],
  ["Laos", 66.2, 70.1],
  ["East Timor", 66.1, 69.5],
  ["El Salvador", 66.1, 75.1],
  ["Mexico", 66.1, 74.9],
  ["Guatemala", 66.0, 72.7],
  ["India", 65.8, 68.9],
  ["Azerbaijan", 65.6, 73.3],
  ["Indonesia", 65.5, 69.7],
  ["Fiji", 65.4, 68.9],
  ["Ukraine", 65.2, 74.4],
  ["Senegal", 64.8, 69.3],
  ["Russia", 64.2, 74.8],
  ["Tanzania", 64.2, 68.3],
  ["Pakistan", 63.8, 68.6],
  ["Sudan", 62.7, 67.9],
  ["Myanmar", 62.5, 69.0],
  ["Ethiopia", 61.9, 68.3],
  ["Ghana", 61.6, 66.0],
  ["Bolivia", 60.9, 66.8],
  ["Yemen", 60.6, 67.1],
  ["Niger", 60.4, 62.8],
  ["Haiti", 60.4, 66.1],
  ["South Africa", 59.5, 65.0],
  ["Angola", 59.0, 64.3],
  ["Kenya", 58.9, 64.1],
  ["Afghanistan", 58.9, 65.3],
  ["Cameroon", 58.7, 62.0],
  ["Zambia", 58.5, 63.9],
  ["Ivory Coast", 57.4, 59.9],
  ["Congo", 57.0, 61.5],
  ["Zimbabwe", 56.2, 62.0],
  ["Somalia", 53.2, 57.4],
  ["Nigeria", 52.3, 53.1],
  ["Chad", 50.8, 54.3],
];
healthCareInfo.sort((a, b) => a[0].localeCompare(b[0]));

const countrySelect = document.getElementById("select_country");
const countryOptions = healthCareInfo.reduce((options, country, index) => {
  return options + `\n<option value="${index}">${country[0]}</option>`;
}, "");
countrySelect.innerHTML = countryOptions;

const life = document.getElementById("life");
const form = document.querySelector("form");
const summary = document.getElementById("summary");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  life.innerHTML = "";
  summary.innerHTML = "";

  const data = Object.fromEntries(new FormData(form));

  const userDays = data.age * 365 - Math.floor(data.age / 4);
  const totalDays = Math.ceil(healthCareInfo[data.country][data.gender] * 365);
  console.log(totalDays);
  const days = new Array(Math.ceil(totalDays))
    .fill("")
    .reduce((daysAcc, day, index) => {
      if (index === userDays) {
        return (
          daysAcc +
          `\n<div class="day ${
            index < userDays ? "gone" : ""
          }" id="current_day"></div>`
        );
      } else if (index === totalDays - 1) {
        return (
          daysAcc +
          `\n<div class="day ${
            index < userDays ? "gone" : ""
          }" id="current_day"></div>`
        );
      }

      return (
        daysAcc + `\n<div class="day ${index < userDays ? "gone" : ""}"></div>`
      );
    }, "");

  life.insertAdjacentHTML("afterbegin", days);
  summary.innerText = `You have lived ${userDays} days out of ${totalDays} days. ${
    totalDays - userDays <= 0
      ? "Time is up."
      : `And you have ${totalDays - userDays} days left.`
  }`;
  document
    .getElementById("current_day")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

summary.addEventListener("click", () => {
  form.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
