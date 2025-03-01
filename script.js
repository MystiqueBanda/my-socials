// Function to enter the main site
function enterSite() {
    const music = document.getElementById("backgroundMusic");
    const enterPage = document.getElementById("enterPage");
    const content = document.querySelector(".content");
    const body = document.body;

    // Play music
    music.play(); 

    // Smooth blur removal
    enterPage.style.transition = "backdrop-filter 1s ease, opacity 1s ease";
    enterPage.style.backdropFilter = "blur(0px)"; // Reduce blur gradually
    enterPage.style.opacity = "0"; // Fade out

    // Hide enterPage completely after transition
    setTimeout(() => {
        enterPage.style.display = "none"; // Hide after transition
        body.style.backgroundImage = "url('background.gif')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "center";
        body.style.backgroundSize = "cover";

        // Show the main content
        content.style.display = "block"; 
        content.style.opacity = "1"; 
    }, 1000);
}


// Music toggle functionality
let isMusicPlaying = true;

function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const toggleButton = document.getElementById("musicToggle");
    if (isMusicPlaying) {
        music.pause(); 
        toggleButton.innerText = "Play Music"; 
    } else {
        music.play(); 
        toggleButton.innerText = "Pause Music"; 
    }
    isMusicPlaying = !isMusicPlaying; 
}

// Function to play hover sound
function playHoverSound() {
    const hoverSound = document.getElementById("hoverSound");
    hoverSound.currentTime = 0;
    hoverSound.play(); 
}

// Play hitsound on profile picture or social link click
document.querySelector('.profile-pic').addEventListener('click', () => {
    const hitSound = new Audio('hitsound.wav');
    hitSound.play(); 
});

document.querySelectorAll('.social-links a').forEach((link) => {
    link.addEventListener('click', () => {
        const hitSound = new Audio('hitsound.wav');
        hitSound.play(); 
    });
});
