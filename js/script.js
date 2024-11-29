let images = document.querySelectorAll('.back-images div');
let index = 0;

function cycleImages() {
    images.forEach((img, i) => {
        img.style.transform = `translateX(${(i - index) * -10}%)`;
        img.style.opacity = 3 - (Math.abs(i - index) * 0.2);
        img.style.zIndex = images.length - Math.abs(i - index);
    });

    index = (index + 1) % images.length; // Boucle
}

setInterval(cycleImages, 2000); // Change toutes les 2 secondes
