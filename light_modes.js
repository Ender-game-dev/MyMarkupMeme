let lightMode = document.getElementById("light");
let darkMode = document.getElementById("dark");
let nightMode = document.getElementById("night");
let audio = new Audio("./resources/dont_pee_on_the_floor_use_the_comedor.mp3");

let resetAudio = () => {
    audio.pause();
    audio.currentTime = 0;
}

lightMode.addEventListener("click", function() {
    document.getElementsByTagName("header")[0].style.display = "block";
    document.getElementsByTagName("footer")[0].style.display = "block";
    document.getElementsByTagName("body")[0].style.background = "block";
    document.getElementById("main-menu").style.display = "block";
    document.getElementsByTagName("header")[0].style.backgroundColor = "rgb(220, 220, 220)";
    document.getElementsByTagName("header")[0].style.color = "rgb(0, 0, 0)";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "rgb(220, 220, 220)";
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom, rgb(255, 255, 255) 85%, rgb(190, 190, 190) 100%)";
    document.getElementById("main-menu").style.color = "black";
    document.querySelector(".radio_container").style.border = "double 5px rgb(200, 200, 200)";
    document.querySelector(".radio_container").style.backgroundColor = "whitesmoke";
    document.querySelector(".radio_container").style.color = "black";
    document.querySelector(".radio_container").style.opacity = "1";
    document.querySelector(".credits").style.color = "black";
    document.querySelector(".author-github").style.color = "black";
    document.getElementById("fnaf").style.display = "none";
    resetAudio();
});

darkMode.addEventListener("click", function() {
    document.getElementsByTagName("header")[0].style.display = "block";
    document.getElementsByTagName("footer")[0].style.display = "block";
    document.getElementsByTagName("body")[0].style.background = "block";
    document.getElementById("main-menu").style.display = "block";
    document.getElementsByTagName("header")[0].style.backgroundColor = "rgb(0, 0, 20)";
    document.getElementsByTagName("header")[0].style.color = "rgb(255, 255, 255)";
    document.getElementsByTagName("footer")[0].style.backgroundColor = "rgb(0, 0, 20)";
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom, rgb(0, 0, 20) 75%, rgb(110, 110, 110) 100%)";
    document.getElementById("main-menu").style.color = "white";
    document.querySelector(".radio_container").style.border = "double 5px rgb(0, 0, 0)";
    document.querySelector(".radio_container").style.backgroundColor = "rgb(15, 15, 35)";
    document.querySelector(".radio_container").style.color = "rgb(255, 255, 255)";
    document.querySelector(".radio_container").style.opacity = "1";
    document.querySelector(".credits").style.color = "white";
    document.querySelector(".author-github").style.color = "white";
    document.getElementById("fnaf").style.display = "none";
    resetAudio();
});

nightMode.addEventListener("click", function() {
    document.getElementsByTagName("header")[0].style.display = "none";
    document.getElementsByTagName("footer")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.background = "none";
    document.getElementById("main-menu").style.display = "none";
    document.querySelector(".radio_container").style.display = "flex";
    document.querySelector(".radio_container").style.border = "double 5px rgb(0, 0, 0)";
    document.querySelector(".radio_container").style.backgroundColor = "rgb(15, 15, 35)";
    document.querySelector(".radio_container").style.color = "rgb(255, 255, 255)";
    document.querySelector(".radio_container").style.opacity = "0.2";
    document.getElementById("fnaf").style.display = "block";
    audio.play();
    audio.loop = true;
})
