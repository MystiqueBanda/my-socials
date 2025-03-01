// Function to enter the main site
function enterSite() {
    const music = document.getElementById("backgroundMusic");
    const enterPage = document.getElementById("enterPage");
    const content = document.querySelector(".content");
    const body = document.body;

    // Play music
    music.play(); 

    // Hide the enter button
    enterPage.style.display = "none"; 

    // Set the background image to the GIF
    body.style.backgroundImage = "url('background.gif')";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";

    // Show the main content after a short delay
    setTimeout(() => {
        content.style.display = "block"; 
        content.style.opacity = "1"; 
    }, 500);
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

document.getElementById("enterButton").addEventListener("click", function() {
    document.getElementById("enterPage").style.backdropFilter = "blur(0px)";
    document.querySelector("#enterPage::before").style.filter = "blur(0px)";
    document.querySelector("#enterPage::before").style.opacity = "0"; // Fade out effect
    setTimeout(() => {
        document.getElementById("enterPage").style.display = "none"; // Hide after transition
    }, 1000); // Match the transition time
});

