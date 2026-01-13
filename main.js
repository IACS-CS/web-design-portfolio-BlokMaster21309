console.log("this message is all i do!");
// Get references to the button and the target element
const scrollButton = document.getElementById('arrdown');
const targetSection = document.getElementById('content');

// Add an event listener to the button
scrollButton.addEventListener('click', () => {
  // Use scrollIntoView with smooth behavior options
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start' // Aligns the top of the element to the top of the viewport
  });
});