document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAnnonce");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const siret = document.getElementById('siret').value;
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('password').value;
    const business_sector = document.getElementById('business_sector').value;
    const web_site = document.getElementById('web_site').value;
    const description = document.getElementById('description').value;
    
    try {
      const response = await fetch("http://localhost:3000/api/Companies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, siret, mail, password, business_sector, web_site, description}),
      });

      const data = await response.json();

      if (data.success) {
        alert("Inscription réussie !");
        window.location.replace("jb.html");
      } else {
        alert("Erreur : " + data.message);
      }
    } catch (error) {
      alert("Erreur d'inscription au serveur !");
      console.error(error);
    }
  });
});
