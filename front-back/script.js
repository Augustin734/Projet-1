function submitForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    var name = nameInput.value;
    var email = emailInput.value;

    fetch('/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = data.message;
        console.log(data);

        // 🔹 Réinitialiser les champs après soumission
        nameInput.value = "";
        emailInput.value = "";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
