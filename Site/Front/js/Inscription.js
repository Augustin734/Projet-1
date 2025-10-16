document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formAnnonce");

  // Ajout d'un écouteur d'événements pour la soumission du formulaire
  form.addEventListener("submit", async function(event) {
    event.preventDefault();  // Empêche le rechargement de la page

    // Récupérer les données du formulaire en fonction des nouveaux id
    const data = {
      name: document.getElementById("name").value,
      first_name: document.getElementById("first_name").value,
      phone_number: document.getElementById("phone_number").value,
      mail: document.getElementById("mail").value,
      password: document.getElementById("password").value,
      adress: document.getElementById("adress").value,
      city: document.getElementById("city").value,
    };

    try {
      const response = await fetch("http://localhost:3000/People", {
        method: "POST",  // Méthode HTTP POST
        headers: {
          "Content-Type": "application/json",  // Indique que les données envoyées sont en JSON
        },
        body: JSON.stringify(data),  // Transforme l'objet en JSON pour l'envoyer
      });

      // Vérification de la réponse du serveur
      if (response.ok) {
        const responseData = await response.json();
        console.log("People created successfully:", responseData);
        alert("User created successfully!");
        // Optionnel : rediriger ou réinitialiser le formulaire si nécessaire
      } else {
        const errorData = await response.json();
        console.error("Error creating people:", errorData);
        alert("Error creating user.");
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Network error or server issue.");
    }
  });
});
