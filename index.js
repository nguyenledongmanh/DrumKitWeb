var numberOfDrumbtn = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumbtn; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    })
}
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
        function getAudio(file) {
            var audio = new Audio(file);
            audio.play();
        }
        switch (key) {
            case "w":
                getAudio("./sounds/tom-1.mp3")
                break;
            
            case "a":
                getAudio("./sounds/tom-2.mp3")
                break;
            
            case "s":
                getAudio("./sounds/tom-3.mp3")
                break;
            
            case "d":
                getAudio("./sounds/tom-4.mp3")
                break;    

            case "j":
                getAudio("./sounds/snare.mp3")
                break;
            
            case "k":
                getAudio("./sounds/crash.mp3")
                break;

            case "l":
                getAudio("./sounds/kick-bass.mp3")
                break;

            default:
                break;
        }
    }

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}