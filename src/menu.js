function createMenu() {
  const content = document.querySelector("#content");
  const divMenu = document.createElement("div");
  divMenu.classList.add("menu-content");
  divMenu.innerHTML = `<h2>Menu</h2>

    <div class="dishes">
      <div class="pizza">
        <div class="pizza-title">
          <h3>Our Pizza</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem corrupti veniam porro deleniti consectetur at quis
            exercitationem? Excepturi, impedit!
          </p>
        </div>
        <div>
          <img
            id="image-pizza"
            src="./Circolo Popolare/circolo-popolare-pizza.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="dessert">
        <div>
          <img
            id="image-dessert"
            src="./Circolo Popolare/circolo-popolare-desserts.jpg"
            alt=""
          />
        </div>
        <div class="dessert-title">
          <h3>Our Dessert</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem corrupti veniam porro deleniti consectetur at quis
            exercitationem? Excepturi, impedit!
          </p>
        </div>
      </div>
    </div>`;

  content.append(divMenu);
}

export default createMenu;
