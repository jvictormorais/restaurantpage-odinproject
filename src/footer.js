function createFooter() {
  const content = document.querySelector("#content");
  const divFooter = document.createElement("div");
  divFooter.classList.add("footer");
  divFooter.innerHTML = `<p>Street Somewhere, 000 - City - Country</p>
    <p>All Rights Reserved</p>
  </div>`;

  content.append(divFooter);
}

export default createFooter;
