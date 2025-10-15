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

document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidenav = document.getElementById("mySidenav");
  const navlinks = document.querySelectorAll(".sidenav a[href^='#']");


  openBtn.onclick = function() {
    sidenav.classList.add("active");
  };

 
  closeBtn.onclick = function() {
    sidenav.classList.remove("active");
  };

  
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      
      e.preventDefault();

      
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      
      sidenav.classList.remove("active");

      
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
    });
  });
});
