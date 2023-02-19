function createContact() {
  const content = document.querySelector("#content");
  const divContact = document.createElement("div");
  divContact.classList.add("contact-content");
  divContact.innerHTML = `<div><h2>We are waiting for you</h2></div>
    <div class="information">
      <div class="location">
        <h3>Location</h3>
        <p>Street Name</p>
      </div>
      <div class="open-hour">
        <h3>Open Hour</h3>
        <p>Mon - Sat: 11:30 AM - 08:30 PM</p>
      </div>
      <div class="phone">
        <h3>Phone</h3>
        <p>(55) 5555-5555</p>
      </div>
    </div>`;

  content.append(divContact);
}

export default createContact;
