import { getInfoLinks, getParkData } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import "../css/home.css";

const init = async () => {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  // Function Calls
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);

  // enableNavigation();
}

const setParkIntro = (data) => {
  const introSection = document.querySelector(".intro");
  introSection.innerHTML = `<h1>${data.fullName}</h1>
                            <p>${data.description}</p>`
}

const setParkInfoLinks = (data) => {
  // Add media cards dynamically with map method
  const infoSection = document.querySelector(".info");
  const mediaCards = data.map(mediaCardTemplate);

  // mediaCards.join("") eliminates the comma after every element
  infoSection.insertAdjacentHTML("afterbegin",mediaCards.join(""));
}

init();

