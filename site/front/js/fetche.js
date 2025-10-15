document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  errorMsg.textContent = ''; // Reset message

  try {
    const response = await fetch('https://ton-api.com/api/login', { // Remplace par ton URL d'API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // ✅ Connexion réussie
      // Exemple : stocker le token JWT dans localStorage
      localStorage.setItem('token', data.token);

      // Redirection vers une autre page
      window.location.href = '/dashboard.html';
    } else {
      // ❌ Erreur côté API (401, 403, etc.)
      errorMsg.textContent = data.message || 'Identifiants invalides.';
    }
  } catch (error) {
    // ❌ Erreur réseau ou serveur
    console.error(error);
    errorMsg.textContent = "Erreur lors de la connexion. Veuillez réessayer.";
  }
});