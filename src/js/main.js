import { getInfoLinks, getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const init = async () => {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  // Function Calls
  setParkIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
  setHeaderFooter(parkData);
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

