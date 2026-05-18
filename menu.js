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