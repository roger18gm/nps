import spritePath from '../images/sprite.symbol.svg';

// Document Body Park Information Elements
export const parkInfoTemplate = (info) => {
    return `<a href = "/" class="hero-banner-title">${info.name}</a>
            <p class="hero-banner-subtitle"> 
              <span>${info.designation}</span>
              <span>${info.states}</span>
            </p>
    `;
  }


export const mediaCardTemplate = (info) =>  {
  return `<div class="media-card">
            <a href="${info.link}">
              <img src="${info.image}" alt="${info.name}" />
              <h3 class="media-card__title">${info.name}</h3>
            </a>
            <p>${info.description}</p>
          </div>
  `;
}

export const footerTemplate = (info) => {
      // Footer Contact Information Elements
  const getMailingAddress = (addresses) => {
      return addresses.find((address) => address.type === "Mailing");
  }
  const getVoicePhone = (phones) => {
      return phones.find((phone) => phone.type === "Voice")
  }
  
  const mailing = getMailingAddress(info.addresses);
  const voicePhone = getVoicePhone(info.contacts.phoneNumbers);
  return `<section class="contact">
          <h3>Contact Info</h3>
          <h4>Mailing Address:</h4>
          <p>${mailing.line1}</p>
          <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
          <h4>Phone:</h4>
          <p>${voicePhone.phoneNumber}</p>
          </section>
  `;
}

export const alertsTemplate = (info) => {
  let alertType = "";

  if (info.category === "Park Closure") {
    alertType = "closure";
  } else {
    alertType = info.category.toLowerCase();
  }
  return `<li class="alert">
            <svg class="icon" role="presentation" focusable="false">
              <use xlink:href="${spritePath}#alert-${alertType}"></use>
            </svg>
            <div>
              <h3 class="alert-${alertType}">${info.title} </h3>
              <p class = "alert-desc">${info.description} </p>
            </div>
          </li>
  `;
};

export const visitorCenterTemplate = (center) => {
  return `<li class="visitor-center">
  <h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p>
  </li>`;
}

export const vcNameTemplate = (data) => {
  return `${data.name}`;
}

export const vcGeneralInfoTemplate = (data) => {
  return `<figure>
            <img src="${data.images[0].url}" alt="${data.images[0].altText}" />
            <figcaption>
            ${data.images[0].caption}<span>${data.images[0].credit}</span>
            </figcaption>
        </figure>
        <p>${data.description}</p> `;
}
export const listTemplate = (data, contentTemplate) => {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

const vcAddressTemplate = (data) => {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.line2} ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export const vcAddressesTemplate = (data) => {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}

export const vcDirectionsTemplate = (data) => {
  return `<p>${data.directionsInfo}</p>
          <a href=${data.directionsUrl}>Directions URL</a>`;
}

export const vcImageTemplate = (data) => {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export const vcContactsTemplate = (data) => {
  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}

export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}