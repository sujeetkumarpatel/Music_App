console.log('Welcome to The Javascript')
//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif2 = document.getElementById('gif2');
let masterSongName= document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    { songName: 'Tera Pyar Mai', filePath: 'song/1.mp3', coverPath: 'cover/1.jpg' },
    { songName: 'Dil Ibaadat Tum Mile', filePath: 'song/2.mp3', coverPath: 'cover/2.jpg' },
    { songName: 'Dua Karo - Street Dancer 3D (1)', filePath: 'song/3.mp3', coverPath: 'cover/3.jpg' },
    { songName: 'Dua Karo - Street Dancer 3D', filePath: 'song/4.mp3', coverPath: 'cover/4.jpg' },
    { songName: 'Meri Maa Ke Barabar Koi Nahi_32', filePath: 'song/5.mp3', coverPath: 'cover/5.jpg' },
    { songName: 'Raatan-Lambiyan(mp3songdownloads.co)', filePath: 'song/6.mp3', coverPath: 'cover/6.jpg' },
    { songName: 'Sanam Teri Kasam song download ', filePath: 'song/7.mp3', coverPath: 'cover/7.jpg' },
    { songName: 'Zaroori Tha song download', filePath: 'song/8.mp3', coverPath: 'cover/8.jpg' },

]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})


//audioElement.play();


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif2.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif2.style.opacity = 0;
    }
})

// lesten to Events

audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.torget);
        makeAllPlays();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif2.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=8) {
        songIndex = 0
    }
    else {
        songIndex += 1
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})