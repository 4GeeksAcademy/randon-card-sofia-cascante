/* eslint-disable */
window.onload = function() {
  document.body.style.backgroundColor = "green";
  document.body.style.height = "100vh";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";

  let app = document.querySelector("#app");
  let iconArr = ["♦", "♥", "♠", "♣"];
  let num = ["1", "2", "3", "4", "5"];
  let numRandom = Math.floor(Math.random() * num.length);
  let iconRandom = Math.floor(Math.random() * iconArr.length);

  app.style.height = "500px";
  app.style.width = "300px";
  app.style.backgroundColor = "white";
  app.style.display = "flex";
  app.style.flexDirection = "column";
  app.style.alignItems = "center";
  app.style.justifyContent = "space-between";

  document.body.style.justifyContent = "center";
  let iconTop = document.createElement("div");

  iconTop.style.fontSize = "3.5rem";
  iconTop.style.width = "100%";
  iconTop.style.textAlign = "left";
  iconTop.style.border = "1px solid red";

  let iconMiddle = document.createElement("div");
  iconMiddle.style.fontSize = "3.5rem";
  let iconBotton = document.createElement("div");

  iconBotton.style.fontSize = "3.5rem";
  iconBotton.style.width = "100%";
  iconBotton.style.textAlign = "right";
  iconBotton.style.border = "1px solid red";

  iconTop.innerHTML = iconArr[iconRandom];
  iconMiddle.innerHTML = num[numRandom];
  iconBotton.innerHTML = iconArr[iconRandom];

  app.appendChild(iconTop);
  app.appendChild(iconMiddle);
  app.appendChild(iconBotton);
  console.log(app);
};
