import { setHeaderFooter } from './setHeaderFooter.mjs';
import { getAlertsData, getParkData, getVisitorCenterData } from './parkService.mjs';
import { alertsTemplate, visitorCenterTemplate } from './templates.mjs';
import "../css/style.css";
import "../css/conditions.css";

const init = async() => {
  const parkData = await getParkData();
  const alertsData = await getAlertsData(parkData.parkCode);
  const visitorCenterData = await getVisitorCenterData(parkData.parkCode);
  console.log(parkData);
  setHeaderFooter(parkData);
  setAlertsInfo(alertsData);
  setVisitorCenterInfo(visitorCenterData);
  setActivitiesInfo(parkData);
}

const setAlertsInfo = (data) => {
  const ul = document.querySelector("#alerts-section > ul");
  ul.innerHTML = "";
  const alerts = data.map(alertsTemplate);
  ul.insertAdjacentHTML("beforeend", alerts.join(""));
}

const setVisitorCenterInfo = (data) => {
  const ul = document.querySelector("#visitor-centers-list");
  ul.innerHTML = "";
  const visitorCenterInfo = data.map(visitorCenterTemplate);
  ul.insertAdjacentHTML("beforeend", visitorCenterInfo.join(""));
}

const setActivitiesInfo = (data) => {
  const ul = document.querySelector("#activities-section > details > ul");
  ul.innerHTML = "";
  const activitiesInfo = data.activities.map((d) => {return `<li>${d.name}</li>`;});
  ul.insertAdjacentHTML("beforeend", activitiesInfo.join(""));
}

init();