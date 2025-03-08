import { enableNavigation, toggleNavSubMenus } from "./navigation.mjs";
import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

// Update Header Data
function setHeaderInfo(data) {
    // Page title
    const title = document.querySelector("title");
    title.innerHTML = data.fullName;
    
    // Disclaimer message redirect link
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
  
    // Park name and location
    const heroBanner = document.querySelector(".hero-banner-content");
    heroBanner.innerHTML = parkInfoTemplate(data);
  
    // Park image
    const parkImage = document.querySelector(".hero-banner > img");
    parkImage.src = data.images.at(0).url;
    parkImage.alt = data.images.at(0).altText;
}

const setFooterInfo = (data) => {
    const footer = document.querySelector("#park-footer");
    const footerContact = footerTemplate(data);
    footer.insertAdjacentHTML("afterbegin", footerContact);
}

export const setHeaderFooter = (data) => {
    setHeaderInfo(data);
    setFooterInfo(data);
    enableNavigation();
    toggleNavSubMenus();
  }