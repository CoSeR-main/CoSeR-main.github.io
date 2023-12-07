
const originalImage = document.getElementById('original-image');
const magnifier = document.querySelector('.magnifier');

originalImage.addEventListener('mousemove', (e) => {
  const imageWidth = originalImage.offsetWidth;
  const imageHeight = originalImage.offsetHeight;

  const magnifyFactor = 3; // Adjust magnification strength

  // Calculate magnifier position
  const xOffset = e.offsetX - magnifier.offsetWidth / 2;
  const yOffset = e.offsetY - magnifier.offsetHeight / 2;

  // Ensure magnifier stays within image bounds
  if (xOffset < 0) {
    xOffset = 0;
  } else if (xOffset + magnifier.offsetWidth > imageWidth) {
    xOffset = imageWidth - magnifier.offsetWidth;
  }
  if (yOffset < 0) {
    yOffset = 0;
  } else if (yOffset + magnifier.offsetHeight > imageHeight) {
    yOffset = imageHeight - magnifier.offsetHeight;
  }

  // Set magnifier position and image background
  magnifier.style.left = `${xOffset}px`;
  magnifier.style.top = `${yOffset}px`;
  magnifier.style.backgroundImage = `url(${originalImage.src})`;
  magnifier.style.backgroundSize = `${imageWidth * magnifyFactor}px ${imageHeight * magnifyFactor}px`;
  magnifier.style.backgroundPosition = `-${xOffset * magnifyFactor}px -${yOffset * magnifyFactor}px`;

  // Show magnifier on mousemove
  magnifier.style.display = 'block';
});

originalImage.addEventListener('mouseout', () => {
  // Hide magnifier on mouseout
  magnifier.style.display = 'none';
});
