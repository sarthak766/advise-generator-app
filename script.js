
const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('.dice-button');


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const { slip } = data;
            adviceNumber.textContent = `ADVICE #${slip.id}`;
            adviceText.textContent = `"${slip.advice}"`;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            adviceText.textContent = 'Oops! Something went wrong. Try again later.';
        });
}

diceButton.addEventListener('click', getAdvice);
