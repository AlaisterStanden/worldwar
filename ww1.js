document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("mainImage");
    const roomClickable = document.getElementById("roomClickable");
    const backButton = document.getElementById("backButton");
    const gatherButton = document.getElementById("gatherButton");
    const mapButton = document.getElementById("mapButton");
    const videoOverlay = document.getElementById("videoOverlay");
    const briefingVideo = document.getElementById("briefingVideo");
    const closeVideo = document.getElementById("closeVideo");
    const frontLineClickable = document.getElementById("frontLineClickable");
    const threeWaysButton = document.getElementById("threeWaysButton");
    const decodeImageOverlay = document.getElementById("decodeImageOverlay");
    const closeDecodeImage = document.getElementById("closeDecodeImage");
    const middleDecodeButton = document.getElementById("middleDecodeButton");
    const bottomDecodeButton = document.getElementById("bottomDecodeButton");


    const phrases = {
        "attack": "defxi",
        "fixed": "999",
        "retreat immediately": "Fallback to base camp!",
    };

    // Add functionality for the middle Decode Message button
    middleDecodeButton.addEventListener("click", () => {
        console.log("Middle Decode button clicked");

        // Prompt the user for a phrase
        const userInput = prompt("Enter the secret phrase:");

        // Check the input against predefined phrases
        if (userInput) {
            const response = phrases[userInput.toLowerCase()];
            if (response) {
                alert(`Relay Instructions: ${response}`);
            } else {
                alert("Invalid phrase. Try again.");
            }
        }
    });
    bottomDecodeButton.addEventListener("click", () => {
        console.log("Middle Decode button clicked");

        // Prompt the user for a phrase
        const userInput = prompt("Rebuild the relay circuit:");

        // Check the input against predefined phrases
        if (userInput) {
            const response = phrases[userInput.toLowerCase()];
            if (response) {
                alert(`Relay code: ${response}`);
            } else {
                alert("Invalid phrase. Try again.");
            }
        }
    });

    closeDecodeImage.addEventListener("click", () => {
        decodeImageOverlay.classList.add("hidden"); // Hide the overlay
    });

    // Handle click for the "To the Front" button
    frontLineClickable.addEventListener("click", () => {
        mainImage.src = "pictures/3ways.webp"; // Change to the front line room
        roomClickable.style.display = "none"; // Hide the clickable area
        backButton.classList.remove("hidden"); // Show the back button
        gatherButton.classList.add("hidden"); // Hide the gather button
        mapButton.classList.add("hidden"); // Hide the map button
        threeWaysButton.classList.remove("hidden"); // Show the original Decode button
        middleDecodeButton.classList.remove("hidden"); // Show the new middle Decode button
        bottomDecodeButton.classList.remove("hidden");
    });

    // Handle back button click
    backButton.addEventListener("click", () => {
        mainImage.src = "pictures/officersQuarters.webp"; // Return to the initial room
        roomClickable.style.display = "block"; // Show the clickable area
        backButton.classList.add("hidden"); // Hide the back button
        gatherButton.classList.add("hidden"); // Hide the Briefing button
        mapButton.classList.add("hidden"); // Hide the map button
        threeWaysButton.classList.add("hidden"); // Hide the original Decode button
        middleDecodeButton.classList.add("hidden"); // Hide the new middle Decode button
        bottomDecodeButton.classList.add("hidden");
    });

    // Handle Decode Message button click
    threeWaysButton.addEventListener("click", () => {
        console.log("Decode button clicked"); // Corrected Debugging log
        decodeImageOverlay.classList.remove("hidden"); // Show the new overlay
    });

    // Handle close button for Decode Image overlay
    closeDecodeImage.addEventListener("click", () => {
        decodeImageOverlay.classList.add("hidden"); // Hide the new overlay
    });

    // Ensure video overlay is hidden on page load
    videoOverlay.classList.add("hidden");

    // Handle room click
    roomClickable.addEventListener("click", () => {
        mainImage.src = "pictures/gather.webp"; // Change to the gather room
        roomClickable.style.display = "none"; // Hide the clickable area
        backButton.classList.remove("hidden"); // Show the back button
        gatherButton.classList.remove("hidden"); // Show the gather button
        mapButton.classList.remove("hidden"); // Show the map button
    });

    // Handle gather button click
    gatherButton.addEventListener("click", () => {
        console.log("Gather button clicked"); // Debugging log
        videoOverlay.classList.remove("hidden"); // Show the video overlay
        briefingVideo.play();
    });

    // Handle video close button
    closeVideo.addEventListener("click", () => {
        videoOverlay.style.display = "none"; // Hide the video overlay
        briefingVideo.pause(); // Pause the video
        briefingVideo.currentTime = 0; // Reset the video to the beginning
    });

    // Handle Map button click
    mapButton.addEventListener("click", () => {
        imageOverlay.classList.remove("hidden"); // Show the image overlay
    });

    closeImage.addEventListener("click", () => {
        imageOverlay.classList.add("hidden"); // Hide the image overlay
    });
});
