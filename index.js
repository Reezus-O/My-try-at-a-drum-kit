// // document.querySelectorAll("button")[2].addEventListener('click', function () {
// //     alert("I got clicked");
// // });

let buttons = document.querySelectorAll(".drum");

// console.log(buttons)
// // function pressedkey() {
// //     document.addEventListener("keydown", function(event) {
// //         let key = event;
// //     });
// // }

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let buttonsInnerhtml = this.innerHTML;
        sound(buttonsInnerhtml);
        pressedButton(buttonsInnerhtml);
    });
}

for (let i = 0; i < buttons.length; i++) {
    let pressedkey
    buttons[i].addEventListener("keydown", function (event) {
        pressedkey = event.key;
        sound(pressedkey);
        pressedButton(pressedkey);
    });
}

function sound(event) {
    switch (event) {
        case "w":
            var crashSound = new Audio("./sounds/crash.mp3");
            crashSound.play();
            break;
        case "a":
            var kickBass = new Audio("./sounds/kick-bass.mp3")
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play();
            break;


        default: console.log(event)
            break;
    }
}


function pressedButton(button) {
    let activeButton = "." + button
    document.querySelector(activeButton).classList.add("pressed");

    setTimeout(function() {
        document.querySelector(activeButton).classList.remove("pressed");
    }, 125);
}