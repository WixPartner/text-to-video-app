// scripts.js

// Function to handle media click events
function handleMediaClick(event) {
    event.preventDefault();
    const mediaUrl = event.target.getAttribute('href');
    playMedia(mediaUrl);
}

// Function to play media
function playMedia(url) {
    const mediaPlayer = document.getElementById('mediaPlayer');
    mediaPlayer.src = url;
    mediaPlayer.play();
}

// Function to initialize event listeners
function initializeEventListeners() {
    const mediaLinks = document.querySelectorAll('.media-list a');
    mediaLinks.forEach(link => {
        link.addEventListener('click', handleMediaClick);
    });
}

// Initialize event listeners when the document is fully loaded
document.addEventListener('DOMContentLoaded', initializeEventListeners);
