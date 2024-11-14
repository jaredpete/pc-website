document.addEventListener('DOMContentLoaded', () => {
    const partElements = document.querySelectorAll('.part');
    partElements.forEach(part => {
        part.addEventListener('click', () => {
            alert(`You clicked on: ${part.querySelector('h3').textContent}`);
        });
    });
});
