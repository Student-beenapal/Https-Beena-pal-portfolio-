function toggleMenu(){
    document.getElementById("nav").classList.toggle("active");
}

// Typing Effect
const texts = ["Frontend Developer", "Java Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 120;

function typeEffect() {
    const currentText = texts[textIndex];
    const display = document.getElementById("scrollText");

    if (!isDeleting) {
        // Typing
        display.innerText = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1000);
        }
    } else {
        // Deleting
        display.innerText = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, speed);
}

// Start typing
typeEffect();
