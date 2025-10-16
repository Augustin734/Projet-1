document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector("button[type='submit']");
  
  
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const userData =
    {
      prénom: document.getElementById("jbprénom").value,
      nom: document.getElementById("jbnom").value,
      phone_number: document.getElementById("jbphone_number").value,
      mail: document.getElementById("jbmail").value,
      password: document.getElementById("jbpassword").value,
      adresse: document.getElementById("jbadresse").value,
      ville: document.getElementById("jbville").value,
    }
    
    try {
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Inscription réussie !");
        window.location.replace("connexion.html");
      } else {
        alert("Erreur : " + data.message);
      }
    } catch (err) {
      alert("Erreur de connexion au serveur !");
      console.error(err);
    }
  });
});
