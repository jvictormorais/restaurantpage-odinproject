function createHome() {
  const content = document.querySelector("#content");
  const divHome = document.createElement("div");
  divHome.classList.add("home-content");
  divHome.innerHTML = `<div class="hero-banner">
    <img
      id="home-img"
      src="./Circolo Popolare/circolo-popolare-feature-1024x683.jpg"
      alt="Restaurant"
    />
    <h2 class="home-name">The Restaurant</h2>
  </div>
  <div class="about">
    <h3>Who we are?</h3>
    <p>
      Gigantic pizzas, outlandish pasta dishes, and a fabulously OTT lemon
      meringue pie are the standouts here… if your eyes are fixed only on
      the menu, of course. Otherwise, you're probably looking at the fairy
      lights and 20,000 bottles of booze - which is pretty understandable.
    </p>
  </div>`;
  content.append(divHome);
}

export default createHome;
