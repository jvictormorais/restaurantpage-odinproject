function createButtons() {
  const homeContent = document.querySelector(".home-content");
  const menuContent = document.querySelector(".menu-content");
  const contactContent = document.querySelector(".contact-content");

  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const contactBtn = document.querySelector("#contact-btn");

  homeBtn.addEventListener("click", function () {
    displayHome();
  });
  menuBtn.addEventListener("click", function () {
    displayMenu();
  });
  contactBtn.addEventListener("click", function () {
    displayContact();
  });

  function displayHome() {
    console.log("home btn");
    homeContent.style.display = "block";
    menuContent.style.display = "none";
    contactContent.style.display = "none";
    homeBtn.style.textDecoration = "underline";
    menuBtn.style.textDecoration = "none";
    contactBtn.style.textDecoration = "none";
  }

  function displayMenu() {
    console.log("menu btn");
    homeContent.style.display = "none";
    menuContent.style.display = "flex";
    contactContent.style.display = "none";
    homeBtn.style.textDecoration = "none";
    menuBtn.style.textDecoration = "underline";
    contactBtn.style.textDecoration = "none";
  }

  function displayContact() {
    console.log("contact btn");
    homeContent.style.display = "none";
    menuContent.style.display = "none";
    contactContent.style.display = "flex";
    homeBtn.style.textDecoration = "none";
    menuBtn.style.textDecoration = "none";
    contactBtn.style.textDecoration = "underline";
  }
}

export default createButtons;
