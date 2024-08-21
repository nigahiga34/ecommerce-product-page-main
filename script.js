
document.querySelector('.increment').addEventListener('click', function() {
    let quantityInput = document.querySelector('.quantity-selector input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.querySelector('.decrement').addEventListener('click', function() {
    let quantityInput = document.querySelector('.quantity-selector input');
    if (parseInt(quantityInput.value) > 0) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});


document.querySelector('.cart-button').addEventListener('click', function() {
    alert('Thank you for your purchase!');
});


const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnails .thumbnail');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = thumbnails[index].src.replace('thumb', 'large'); // Assuming large images follow the naming pattern
    lightbox.classList.remove('hidden');
}

// Function to close lightbox
function closeLightbox() {
    lightbox.classList.add('hidden');
}

// Function to show next image
function showNext() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    openLightbox(currentIndex);
}

// Function to show previous image
function showPrev() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    openLightbox(currentIndex);
}

// Attach click event to thumbnails to open lightbox
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => openLightbox(index));
});

// Attach click event to lightbox thumbnails to change image
lightboxThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => openLightbox(index));
});

// Attach click events to close, prev, and next buttons
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Close lightbox when clicking outside of the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

