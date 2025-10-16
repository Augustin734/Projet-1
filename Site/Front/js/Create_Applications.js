document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAnnonce");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const mail = document.getElementById('mail').value;
    const cover_letter = document.getElementById('cover_letter').value;
    const application_status = document.getElementById('application_status').value;
    
    try {
      const response = await fetch("http://localhost:3000/api/Applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, mail, cover_letter, application_status}),
      });

      const data = await response.json();

      if (data.success) {
        alert("Application Creation succeed !");
        window.location.replace("Advertisements_Board.html");
      } else {
        alert("Erreur : " + data.message);
      }
    } catch (error) {
      alert("Applications server error");
      console.error(error);
    }
  });
});
