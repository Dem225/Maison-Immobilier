document.addEventListener("DOMContentLoaded", function() {
    const sidenav = document.getElementById("mySidenav");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    // Ouvrir le menu au clic sur le burger
    openBtn.addEventListener("click", function(e) {
        e.preventDefault();
        sidenav.classList.add("active");
    });

    // Fermer le menu au clic sur le X
    closeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        sidenav.classList.remove("active");
    });

    // Optionnel : Ferme le menu si on clique en dehors du menu
    document.addEventListener("click", function(e) {
        if (!sidenav.contains(e.target) && !openBtn.contains(e.target)) {
            sidenav.classList.remove("active");
        }
    });
});

// Marqueur de page active — fonctionne sur toutes les pages
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-bas a, .sidenav a').forEach(link => {
        const linkPath = new URL(link.href, location.origin).pathname;
        const currentPath = location.pathname;

        if (linkPath === currentPath ||
           (currentPath === '/' && linkPath.includes('index'))) {
            link.classList.add('active');
        }
    });
});

