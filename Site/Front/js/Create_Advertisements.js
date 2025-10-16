document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAnnonce");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const company_name = document.getElementById('company_name').value;
    const job_name = document.getElementById('job_name').value;
    const contract_type = document.getElementById('contract_type').value;
    const business_sector = document.getElementById('business_sector').value;
    const salary = document.getElementById('salary').value;
    const city = document.getElementById('city').value;
    const adress = document.getElementById('adress').value;
    const description = document.getElementById('description').value;
    
    try {
      const response = await fetch("http://localhost:3000/api/Advertisements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({company_name, job_name, contract_type, business_sector, salary, city, adress, description}),
      });

      const data = await response.json();

      if (data.success) {
        alert("Création réussie !");
        window.location.replace("Advertisements_Board.html");
      } else {
        alert("Erreur : " + data.message);
      }
    } catch (error) {
      alert("Erreur de création liée au serveur !");
      console.error(error);
    }
  });
});