        const form = document.getElementById('profileForm');
        const message = document.getElementById('message');
        const avatar = document.getElementById('avatar');
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');

        // Mise à jour de l'avatar avec les initiales
        function updateAvatar() {
            const initials = firstName.value.charAt(0).toUpperCase() + lastName.value.charAt(0).toUpperCase();
            avatar.textContent = initials;
        }

        firstName.addEventListener('input', updateAvatar);
        lastName.addEventListener('input', updateAvatar);

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation de sauvegarde
            message.style.display = 'block';
            
            setTimeout(() => {
                message.style.display = 'none';
            }, 3000);
        });

        function changePhoto() {
            alert('Fonctionnalité de changement de photo à implémenter avec un input file');
        }

        function cancelEdit() {
            if (confirm('Voulez-vous annuler les modifications ?')) {
                form.reset();
                firstName.value = 'Jean';
                lastName.value = 'Dupont';
                updateAvatar();
            }
        }
