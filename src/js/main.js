import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const title = document.querySelector("title");
title.innerHTML = parkData.fullName

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {

    return `<a href = "/" class="hero-banner-title">${info.name}</a>
            <p class="hero-banner-subtitle"> 
              <span>${info.designation}</span>
              <span>${info.states}</span>
            </p>
    `;
}
const heroBanner = document.querySelector(".hero-banner-content");
heroBanner.innerHTML = parkInfoTemplate(parkData);

const parkImage = document.querySelector(".hero-banner > img")
parkImage.src = parkData.images.at(0).url;
parkImage.alt = parkData.images.at(0).altText;


