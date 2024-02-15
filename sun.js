let musicalSun = document.getElementById("click_me");

const songOne = new Audio("./resources/the_og.mp3");
const songTwo = new Audio("./resources/barracuda.mp3");
const songThree = new Audio("./resources/ijbinij.mp3");
const songFour = new Audio("./resources/chipichipichapachapa.mp3");

let playList = [songOne, songTwo, songThree, songFour];
let pickASong = Math.floor(Math.random()* playList.length);

musicalSun.addEventListener("click", function() {
    let audio = playList[pickASong]
    audio.loop = true;
    audio.play();
})