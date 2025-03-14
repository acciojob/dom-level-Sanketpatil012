const targetElement = document.getElementById("level");

// Initialize DOM level counter
let level = 0;

// Traverse up the DOM tree
let currentElement = targetElement;
while (currentElement) {
  level++; // Increase level for each parent
  currentElement = currentElement.parentElement;
}

// Display the result
alert(`The level of the element is: ${level}`);
 



