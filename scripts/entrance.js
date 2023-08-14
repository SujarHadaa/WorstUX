function handleSubmit(event) {
    event.preventDefault();

    var input = document.getElementById("age").value.toLowerCase();;
    var wdc = document.getElementById("wdc");
    var marioplatform = document.getElementById("marioplatform");

    if (input === "yes") {
        wdc.innerHTML = "We don't care how old you are, we just wanted to waste your time.";

        var img = document.createElement("img");
        img.src = "assets/gif/mario.gif";
        img.alt = "GIF";
        img.className = "overlay-gif";
        marioplatform.appendChild(img);


    } else {
        wdc.innerHTML = "Go away kid";
    }

}


function openIndexHTML() {
    window.location.href = "index.html";
}

