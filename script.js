// Function to enter the main site
function enterSite() {
    const music = document.getElementById("backgroundMusic");
    const enterPage = document.getElementById("enterPage");
    const content = document.querySelector(".content");
    const body = document.body;

    // Play music
    music.play(); 

    // Add class to trigger blur removal
    enterPage.classList.add("remove-blur");

    // Hide the enter button immediately (but keep enterPage for blur effect)
    const enterButton = document.getElementById("enterButton");
    if (enterButton) enterButton.style.display = "none";

    // Instantly show the main content
    content.style.display = "block";
    content.style.opacity = "1";

    // Wait for the blur transition, then remove enterPage completely
    setTimeout(() => {
        enterPage.style.display = "none"; // Now hide enterPage after blur is gone
        body.style.backgroundImage = "url('background.gif')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "center";
        body.style.backgroundSize = "cover";
    }, 1000); // Matches the CSS blur transition time
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
