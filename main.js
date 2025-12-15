let slideIndex = 1;
let slideTimeout;

// Initial setup
showSlides(slideIndex);
startAutoSlide();

function plusSlides(n) {
    clearTimeout(slideTimeout); 
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearTimeout(slideTimeout);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.carousel-slide img');
    let dots = document.querySelectorAll('.dot');
    
    // Wrap around logic
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    //Show current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Automatic advance
function autoAdvance() {
    slideIndex++;
    showSlides(slideIndex);
    startAutoSlide();
}

//5 second timer
function startAutoSlide() {
    slideTimeout = setTimeout(autoAdvance, 5000); 
}
