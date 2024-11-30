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


/*--------------------------------------------Gallery JS Code------------------------------------------*/


const cardContainer = document.querySelector('.card_container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove('card0','card1', 'card2', 'card3', 'card4', 'card5','card6');
      });
  

    this.carouselArray.slice(0, 7).forEach((el, i) => {
      el.classList.add(`card${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.classList.contains('gallery-controls-previous')) {
      const lastCard = this.carouselArray.pop(); // Retire la dernière carte
      this.carouselArray.unshift(lastCard);
    } else {
      const firstCard = this.carouselArray.shift(); // Retire la première carte
        this.carouselArray.push(firstCard);
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      const button = document.createElement('button');
      button.className = `gallery-controls-${control}`;
      button.innerText = control;
      galleryControlsContainer.appendChild(button);
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(cardContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
