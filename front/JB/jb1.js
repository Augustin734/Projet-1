document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".learnmore");

  buttons.forEach((btn) => {
    btn.addEventListener("click", dlm);
  });
});

function dlm(event) {
  const timelineContent = event.target.closest(".timeline-content");

  const existing = timelineContent.querySelector(".job-details");
  if (existing) {
    existing.remove();
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.classList.add("job-details");

  newDiv.innerHTML = `
      <h3>Logitech</h3>
      <p>App designer, Technicien etc</p>
      <p>Secteur : Informatique</p>
      <p>Salaire : 5000€</p>
      <p>Ville : Marseille</p>
      <p>Adresse : 50 rue de Rome 13002</p>
      <p>Date de postulation : 06/10/2025</p>
      <p>Descriptif : Méchant taf la vie</p>
  `;

  timelineContent.appendChild(newDiv);
}

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
  