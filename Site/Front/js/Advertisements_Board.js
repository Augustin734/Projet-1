document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidenav = document.getElementById("mySidenav");
  const navLinks = document.querySelectorAll(".sidenav a[href^='#']");


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
      <h3>Example</h3>
      <p>App designer<p>
      <p>Salary : 5000€</p>
      <p>City : Marseille</p>
      <p>Address : 50 rue de Rome 13002</p>
  `;

  timelineContent.appendChild(newDiv);
}
