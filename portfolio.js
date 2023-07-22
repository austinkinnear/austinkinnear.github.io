// Get all the card elements on the page
const cards = document.querySelectorAll('.card');

// Loop through each card and add a click event listener to the toggle button
cards.forEach(card => {
  const toggleButton = card.querySelector('.card__toggle');
  const backSide = card.querySelector('.card__back');

  toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the back side
    const isVisible = card.getAttribute('data-visible') === 'true';
    backSide.style.display = isVisible ? 'none' : 'block';
    card.setAttribute('data-visible', !isVisible);
  });
});
