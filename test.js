document.addEventListener("DOMContentLoaded", () => {
    const lettersContainer = document.querySelector(".letters-container");
    const bucket = document.querySelector(".bucket");

    function createLetter() {
        const letter = document.createElement("div");
        letter.classList.add("letter");
        letter.textContent = getRandomLetter();

        const randomLeft = Math.random();
        letter.style.setProperty("--random-left", randomLeft);

        lettersContainer.appendChild(letter);

        setTimeout(() => {
            lettersContainer.removeChild(letter);
        }, 3000); // Remove letter after 3 seconds

        letter.addEventListener("click", () => {
            bucket.textContent += letter.textContent;
        });
    }

    function getRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }

    setInterval(createLetter, 1000); // Create a new letter every second
});


const exampleCheck1 = document.getElementById("exampleCheck1");
exampleCheck1.addEventListener("change", () => {
    isGameRunning = !exampleCheck1.checked;
});