let BucketGameRun = true;

var everything = document.querySelectorAll("*");

for (var i = 0; i < everything.length; i++) {
    console.log(everything[i].textContent);
}

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("exampleInputEmail");
    const emailHelp = document.getElementById("emailHelp");

    emailInput.addEventListener("blur", () => {
        if (emailInput.value) {
            emailHelp.innerHTML = " <img src='assets/gif/loading.gif' style='height:1em; width:1em;'> <span class='height:1em;'>Sending email to the dark web</span>";
            setTimeout(() => {
                emailHelp.textContent = "We'll never share your email with anyone else.";
            }, 5000);
        }
    });
});




function generateYearRadioButtons(startYear, endYear) {
    const radioContainer = document.getElementById("years");

    for (let year = startYear; year <= endYear; year++) {
        const radioDiv = document.createElement("div");
        radioDiv.classList.add("form-check");

        const radioInput = document.createElement("input");
        radioInput.classList.add("form-check-input");
        radioInput.type = "radio";
        radioInput.name = "exampleRadios";
        radioInput.id = `exampleRadios${year}`;
        radioInput.value = year;
        if (year === startYear) {
            radioInput.checked = true;
        }

        const radioLabel = document.createElement("span");
        radioLabel.classList.add("form-check-label");
        radioLabel.htmlFor = `exampleRadios${year}`;
        radioLabel.textContent = year;

        radioDiv.appendChild(radioInput);
        radioDiv.appendChild(radioLabel);

        // Create the span element for dynamic text
        const span = document.createElement("span");
        radioDiv.appendChild(span);


        radioInput.addEventListener("click", () => {
            if (radioInput.checked) {
                if (year > 2000) {
                    span.innerHTML = "<br>k xa vai";
                } else if (year === 2000) {
                    span.innerHTML = "<br>perfect";
                } else {
                    span.innerHTML = "<br>Namaste Uncle";
                }
            } else {
                span.textContent = "";
            }
        });

        radioContainer.appendChild(radioDiv);
    }
}





function BucketGame() {


    var namecollectordiv = document.getElementById("namecollectordiv");
    namecollectordiv.innerHTML = "<div id='playfield' class='playfield'></div><h5> your name is  </h5> <div id='namecollector' type='text'> </div>";
    var playfield = document.getElementById('playfield');
    var namecollector = document.getElementById('namecollector');

    function createLetter() {

        const letter = document.createElement("div");
        letter.classList.add("letter");
        letter.textContent = getRandomLetter();

        const randomLeft = Math.random();
        letter.style.setProperty("--random-left", randomLeft);

        playfield.appendChild(letter);

        setTimeout(() => {
            playfield.removeChild(letter);
        }, 3000);

        letter.addEventListener("click", () => {
            namecollector.textContent += letter.textContent;
        });

    }

    if (BucketGameRun) {
        setInterval(createLetter, 1000);
    }


}

function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

function turngame() {
    BucketGameRun = !BucketGameRun;
    BucketGame();
}


var everything = document.querySelectorAll("*");

for (var i = 0; i < everything.length; i++) {
    everything[i].style.backgroundColor = "black";
    everything[i].style.color = "white"; // Set text color to white
    everything[i].style.border = "1px solid white"; // Set white border
    if (everything[i] !== document.body) {
        everything[i].style.zIndex = "3";
    }
}





var isDarkMode = false; // Keep track of the dark mode state

function turnEverythingBlack() {
    var everything = document.querySelectorAll("*");

    if (isDarkMode) {
        // Revert to normal styles
        for (var i = 0; i < everything.length; i++) {
            everything[i].style.backgroundColor = "";
            everything[i].style.color = "";
            everything[i].style.border = "";
            everything[i].style.zIndex = "";
        }
    } else {
        // Turn everything to black
        for (var i = 0; i < everything.length; i++) {
            everything[i].style.backgroundColor = "black";
            everything[i].style.color = "black"; // Set text color to white
            everything[i].style.border = "1px solid black"; // Set white border
            if (everything[i] !== document.body) {
                everything[i].style.zIndex = "3";
            }
        }
    }

    // Toggle the dark mode state
    isDarkMode = !isDarkMode;
}




function mohan() {

    var mohanplayer = document.getElementById('mohanplayer');
    mohanplayer.innerHTML = "<img src='assets/Image/mohanplayer.png' style='width:100%; height:20em;'>";
}

function thanos(event) {

    event.preventDefault();

    var reg = document.getElementById('reg');
    var thanos = document.getElementById('thanos');
    var vanishbox = document.getElementById('vanishbox');


    thanos.innerHTML = "<img src='/assets/gif/thanos.gif' style='width:100%; height:10em;'>";

    reg.style.transition = '4s 1s';
    reg.style.transform = 'translateX(50px)';
    reg.style.opacity = '0';
    reg.style.filter = 'blur(10px)';

    setTimeout(() => {
        thanos.innerHTML = "";
    }, 1500);

    setTimeout(() => {
        vanishbox.innerHTML = "<div>No place for people who dont conisder Mohan Adhikari the GOAT</div>";
    }, 4000);

    setTimeout(() => {
        window.location.href = "//www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 5000);
}

