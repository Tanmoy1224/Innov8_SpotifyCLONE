console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;

let audioElement = new Audio('phonk-t-virus-170437.mp3'); // Ensure the file path is correct
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

let songList = [
    { songName: "Bom Diggy Diggy Lofi Mix-(320Kbps.Com.In)", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Neha Kakkar - Dilbar-(320Kbps.Com.In)", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Pasoori Nu (Satya Prem Ki Katha)-(320Kbps.Com.In)", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Piya Ji Aadhi Raat Baaki-(320Kbps.Com.In)", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Bhul dena - salam-e-ishq", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Raat piya ki - salam-e-ishq", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Teri baaton me aisa - salam-e-ishq", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tumhari kassam - salam-e-ishq", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "salam-e-ishq", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Na jaane tu - salam-e-ishq", filePath: "song/9.mp3", coverPath: "covers/10.jpg" },
];

// // songItems.forEach((element, i) => {
// //     console.log(element, i);
// //     element.getElementByTagName("img")[0].src = songs[i].coverPath;
// //     element.getElementByClassName("songtitle")[0].innerText = songs[i].songtitle;
// });


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1; // Show the gif animation
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0; // Hide the gif animation
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    if (!isNaN(audioElement.duration)) {
        let progress = (audioElement.currentTime / audioElement.duration) * 100;
        myProgressBar.value = progress; // Update the progress bar
    }
});

// Handle progress bar change
myProgressBar.addEventListener('input', () => {
    let newTime = (myProgressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = newTime; // Update the current time of the audio
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play')
    }

    )
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays(); 
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})