// Get the radio Buttons
const radioLight = document.getElementById("light");
const radioDark = document.getElementById("dark");
const radioNight = document.getElementById("night");

//Get elements from the DOM
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const credit1 = document.getElementById("creditMe");
const credit2 = document.getElementById("creditKapoloman");
const radioContainer = document.querySelector(".radio_container");
const fnaf = document.getElementById("fnaf");
const jumpscare = document.getElementById("jumpscare");

// Make an array of elements that are similarly styled
const similarStyles = [header, footer, credit1, credit2];
const pageDisplay = [header, main, footer];

// Get Audio file for music box
const musicBox = new Audio("./resources/dont_pee_on_the_floor_use_the_comedor.mp3")

// Function to play and stop audio for music box
function playMusicBox() {
    musicBox.play();
    musicBox.loop = true;
};

function stopMusicBox() {
    musicBox.pause();
    musicBox.currentTime = 0;
};

// Get Audio for jumpscare
const jumpscareAudio = new Audio("./resources/jumpscareSFX.mp3")

// Get time variable
function getTimerForJumpscare() {
    let timerBeforeJumpscare = Math.floor(Math.random()* 46)*1000;
    if (timerBeforeJumpscare < 5000) {
        return getTimerForJumpscare();
    } else {
        return timerBeforeJumpscare;
    };
};

// Functions for the jumpscare
function jumpscareVisible() {
        jumpscare.style.display = "block";
        stopMusicBox();
        fnaf.style.display = "none";
        jumpscareAudio.play();
    };

function stopAndHideJumpscare() {
        jumpscare.style.display = "none";
        jumpscareAudio.pause();
        jumpscare.currentTime = 0;
    };

function playJumpscare() {
    let timerForJumpscareIs = getTimerForJumpscare();
    setTimeout(() => {
        jumpscareVisible();
    }, timerForJumpscareIs);
    setTimeout(() => {
        stopAndHideJumpscare();
        radioDark.checked = "true"
        switchToDark();
    }, timerForJumpscareIs + 850);
};

//I styled the Radio Container individually since it needs a significant amount of styles
function lightContainer() {
    radioContainer.style.border = "double 5px rgb(200, 200, 200)";
    radioContainer.style.backgroundColor = "rgb(245, 245, 245)";
    radioContainer.style.color = "rgb(0, 0, 0)";
    radioContainer.style.opacity = "1";
};

function darkContainer() {
    radioContainer.style.border = "double 5px rgb(0, 0, 0)";
    radioContainer.style.backgroundColor = "rgb(15, 15, 15)";
    radioContainer.style.color = "rgb(255, 255, 255)";
    radioContainer.style.opacity = "1";
};

function nightContainer() {
    radioContainer.style.border = "double 5px rgb(0, 0, 0)";
    radioContainer.style.backgroundColor = "rgb(15, 15, 15)";
    radioContainer.style.color = "rgb(255, 255, 255)";
    radioContainer.style.opacity = "0.2";
}

// Helper Function. It stops the audio and display the page, while hiding the fnaf element
function nightModeOff() {
    stopMusicBox();
    pageDisplay.forEach(element => {
        element.style.display = "block";
    });
    fnaf.style.display = "none";
};

// Functions for light modes
// Light
function switchToLight() {
    nightModeOff();
    lightContainer();
    similarStyles.forEach(element => {
        element.style.backgroundColor = "rgb(220, 220, 220)";
        element.style.color = "rgb(0, 0, 0)";
    });
    main.style.color = "rgb(0, 0, 0)"
    main.style.background  = "linear-gradient(to bottom, rgb(255, 255, 255) 85%, rgb(190, 190, 190) 100%)";
};

// Dark
function switchToDark() {
    nightModeOff();
    darkContainer();
    similarStyles.forEach(element => {
        element.style.backgroundColor = "rgb(0, 0, 20)";
        element.style.color = "rgb(255, 255, 255)";
    });
    main.style.color = "rgb(255, 255, 255)"
    main.style.background = "linear-gradient(to bottom, rgb(0, 0, 20) 75%, rgb(110, 110, 110) 100%)";
};

// Night
function switchToNight() {
    playMusicBox();
    nightContainer();
    pageDisplay.forEach(element => {
        element.style.display = "none";
    });
    fnaf.style.display = "block";
    playJumpscare();
};

// Final Result
radioLight.onclick = switchToLight;
radioDark.onclick =  switchToDark;
radioNight.onclick =  switchToNight;