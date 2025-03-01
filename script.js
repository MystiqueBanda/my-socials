// Function to enter the main site
function enterSite() {
    const music = document.getElementById("backgroundMusic");
    const enterPage = document.getElementById("enterPage");
    const content = document.querySelector(".content");
    const body = document.body;

    // Play music
    music.play(); 

    // Remove blur smoothly
    enterPage.style.transition = "backdrop-filter 1s ease";
    enterPage.style.backdropFilter = "blur(0px)"; // Reduce blur gradually

    // Also remove the blur from ::before pseudo-element
    const style = document.createElement("style");
    style.innerHTML = `
        #enterPage::before {
            transition: filter 1s ease;
            filter: blur(0px);
        }
    `;
    document.head.appendChild(style);
}

    // Hide enterPage after transition
    setTimeout(() => {
        enterPage.style.visibility = "hidden";
        enterPage.style.pointerEvents = "none";

        // Set the normal background (GIF version)
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
