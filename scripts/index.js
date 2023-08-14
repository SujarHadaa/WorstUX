
var nextpage;

function changeImage(imageName) {
    var selectedImage = document.getElementById("selectedImage");
    var dropdown = document.getElementById("dropdownMenuButton");
    var audioPlayer = document.getElementById("audio");
    var submitButton = document.getElementById("submitBtn");



    dropdown.innerHTML = imageName;
    selectedImage.src = "assets/Image/" + imageName + ".png";



    switch (imageName) {
        case "english":
            audioPlayer.src = "assets/sound/english.mp3";
            submitButton.classList.remove("shifted");
            nextpage = "formenglish.html";
            submitButton.style.transform = "none";
            break;
        case "japanese":
            audioPlayer.src = "assets/sound/japanese.mp3";
            submitButton.classList.remove("shifted");
            nextpage = "formjapanese.html";
            submitButton.style.transform = "none";
            break;
        case "nepal":
            audioPlayer.src = "assets/sound/nepal.mp3";
            submitButton.classList.add("shifted");
            submitButton.style.transform = "none";
            break;
        case "african":
            audioPlayer.src = "assets/sound/african.mp3";
            submitButton.classList.remove("shifted");
            submitButton.style.transform = "none";
            nextpage = "formenglish.html";
            break;
        default:
            break;
    }

    // Play the audio after setting everything up
    audioPlayer.play();

    // Apply the mousemove event listener
    document.addEventListener("mousemove", (event) => {
        if (submitButton.classList.contains("shifted")) {
            const randomX = Math.random() * (window.innerWidth - submitButton.offsetWidth);
            const randomY = Math.random() * (window.innerHeight - submitButton.offsetHeight);

            submitButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    });
}


function openNextPage() {
    event.preventDefault();

    if (nextpage != null) {
        window.location.href = nextpage;
    }
}
