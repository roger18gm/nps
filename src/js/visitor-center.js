import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { listTemplate, vcAddressesTemplate, vcAmenityTemplate, vcContactsTemplate, vcDirectionsTemplate, vcGeneralInfoTemplate, vcImageTemplate, vcNameTemplate} from "./templates.mjs";

const init = async () => {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    const visitorCenterID = getParam("id");
    const centerDetails = await getParkVisitorCenterDetails(visitorCenterID);
    console.log("visitor center details json: ", centerDetails);
    const vcAmenityTemplat = vcAmenityTemplate(centerDetails);

    // visitor center name
    const centerNameHTML = vcNameTemplate(centerDetails);
    document.querySelector(".vc-name").insertAdjacentHTML("beforeend", centerNameHTML);

    // visitor center general info
    const generalInfoHTML = vcGeneralInfoTemplate(centerDetails);
    document.querySelector(".vc-info").insertAdjacentHTML("beforeend", generalInfoHTML);

    // address info
    const addressesHTML = vcAddressesTemplate(centerDetails.addresses);
    document.querySelector("#vcAddresses").insertAdjacentHTML("beforeend", addressesHTML);

    // directions info
    const directionsHTML = vcDirectionsTemplate(centerDetails);
    document.querySelector("#vcDirections").insertAdjacentHTML("beforeend", directionsHTML);

    // amenities info
    const amenitiesHTML = listTemplate(centerDetails.amenities, vcAmenityTemplate);
    document.querySelector("#vcAmenities").insertAdjacentHTML("beforeend", amenitiesHTML);

    // contact info
    const contactsHTML = vcContactsTemplate(centerDetails.contacts);
    document.querySelector("#vcContact").insertAdjacentHTML("beforeend", contactsHTML);

    // gallery section
    const galleryHTML = listTemplate(centerDetails.images, vcImageTemplate);
    document.querySelector('.vc-gallery').insertAdjacentHTML("beforeend", galleryHTML);
}


const getParam = (param) => {
    console.log("window location", window.location);
    const paramString = location.search;
    const params = new URLSearchParams(paramString);
    console.log("search params", params.get(param));
    return params.get(param);
}



init();