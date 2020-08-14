//set intial count
let counter = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const styles = event.currentTarget.classList;
        if (styles.contains("decrease")) {
            counter--;
        }
        else if (styles.contains("increase")) {
            counter++;
        }
        else {
            counter = 0;
        }
        if (counter > 0) {
            value.style.color = 'green';
        }
        if (counter < 0) {
            value.style.color = 'red';
        }
        if (counter === 0) {
            value.style.color = 'black';
        }
        value.textContent = counter;
    });
});