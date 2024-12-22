// S'assurer que le DOM est chargé
document.addEventListener("DOMContentLoaded", function () {
               const toggleButton = document.getElementById("toggleButton"); // Icône burger menu
               const navLinks = document.getElementById("navLinks"); // Liste des liens de navigation
           
               // Ajouter un événement au clic sur le bouton
               toggleButton.addEventListener("click", function () {
                   navLinks.classList.toggle("active"); // Ajoute/retire la classe 'active'
                   console.log("Click!");
                   
               });
           });
           