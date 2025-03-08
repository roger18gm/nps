export const enableNavigation = () => {
    const menuButton = document.querySelector("#global-nav-toggle");
  
    menuButton.addEventListener("click", (event) => {
      let target = event.target;
      document.querySelector(".global-nav").classList.toggle("show");
  
      if (target.tagName !== "BUTTON") {
        target = target.closest("button");
      } 
      
      if (document.querySelector(".global-nav").classList.contains("show")) {
        target.setAttribute("aria-expanded", true); 
      } else {
        target.setAttribute("aria-expanded", false); 
      }
    });
}

export const toggleNavSubMenus = () => {
    const subMenuButtons = document.querySelectorAll(".global-nav__split-button__toggle");

    subMenuButtons.forEach((toggle) => {
  
        toggle.addEventListener("click", (event) => {
          console.log(event.currentTarget);
          event.currentTarget.closest("li").querySelector(".global-nav__submenu").classList.toggle("show");
        
          event.currentTarget.querySelector(".icon").classList.toggle("rotate");
        
        });
      });
}