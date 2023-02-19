function createHeader() {
  const content = document.querySelector("#content");
  const divHeader = document.createElement("div");
  divHeader.classList.add("header");
  divHeader.innerHTML = `        <h2>The Restaurant</h2>
    <ul>
      <li id="home-btn">Home</li>
      <li id="menu-btn">Menu</li>
      <li id="contact-btn">Contact</li>
    </ul>`;

  content.append(divHeader);
}

export default createHeader;
