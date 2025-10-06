// Sélectionner tous les boutons "Learn More"
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

// Ajouter un écouteur d'événement à chaque bouton
learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Trouver le contenu associé au bouton
        const content = this.nextElementSibling;
        
        // Basculer la classe active pour afficher/masquer le contenu
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.textContent = 'Learn More';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.textContent = 'Show Less';
        }
    });
});