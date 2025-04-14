let headerBackgrounds = document.querySelectorAll(".background");

let imageIndex = 0;

function changeBackground() {
	// Remove showing class from curretn background
	headerBackgrounds[imageIndex].classList.remove("showing");

	// Increment the image index by one
	imageIndex++;

	// If the image index is more than there are elements, set it to 0
	if (imageIndex >= headerBackgrounds.length) {
		imageIndex = 0;
	}

	// Add the .showing to the next backround
	headerBackgrounds[imageIndex].classList.add("showing");
}

setInterval(changeBackground, 3000)