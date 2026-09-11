document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.menu-nav-link a');
    let currentIndex = 0;

    // Fonction pour déplacer le focus vers le lien actuel
    function focusNavLink(index) {
        if (navLinks[index]) {
            navLinks[index].focus();
        }
    }

    // Ajouter un gestionnaire d'événements pour écouter les touches de direction
    document.addEventListener('keydown', function(event) {
        if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
            event.preventDefault();
            
            if (event.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % navLinks.length; // Aller à l'élément suivant
            } else if (event.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length; // Aller à l'élément précédent
            }
            focusNavLink(currentIndex); // Mettre le focus sur l'élément
        }
    });

    // S'assurer que le focus est sur le premier lien au chargement de la page
    focusNavLink(currentIndex);
});
