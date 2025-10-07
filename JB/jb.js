// Learn More

const lm = document.getElementById("learnmore");

lm.addEventListener('click', dlm);

function dlm() { // Display Learn More
    console.log("calling");
    let newDiv = document.createElement("div");

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

    let currentDiv = document.getElementById("timeline-item");
    document.body.insertBefore(newDiv, currentDiv);
}
