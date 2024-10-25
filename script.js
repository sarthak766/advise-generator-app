

// Select the HTML elements that need to be updated
const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('.dice-button');

// Function to fetch random advice from the API
function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())  // Convert response to JSON
        .then(data => {
            const { slip } = data;  // Destructure the advice data
            // Update the HTML with new advice
            adviceNumber.textContent = `ADVICE #${slip.id}`;
            adviceText.textContent = `"${slip.advice}"`;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            adviceText.textContent = 'Oops! Something went wrong. Try again later.';
        });
}

// Add event listener to the dice button to fetch new advice on click
diceButton.addEventListener('click', getAdvice);
