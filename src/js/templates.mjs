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

export const visitorCenterTemplate = (info) => {
  
  return `<li class="visitor-center"> 
          <h4>${info.name} </h4>
          <p>${info.description}</p>
          <p>${info.directionsInfo}</p>
          </li>
  `;
};