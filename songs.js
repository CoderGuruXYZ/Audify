var songs = [
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48",
        file: "song.mp3"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48",
        file: "song.mp3"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48",
        file: "song.mp3"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48",
        file: "song.mp3"
    },
    {
        image: "blanknote.jpg",
        name: "DDU-DU DDU-DU",
        artist: "Artist Name",
        duration: "1:48",
        file: "song.mp3"
    },
    {
        image: "blanknote.jpg",
        name: "Bunty Roll",
        artist: "Artist Name",
        duration: "1:48",
        file: "song.mp3"
    },
    {
        image: "blanknote.jpg",
        name: "Stay OYEE",
        artist: "Artist Name",
        duration: "1:48",
        file: "song.mp3"
    },
]

function generateSong(id, image, name, artist, duration, target) {
    var song = document.createElement("div");
    song.classList.add("song");
    song.id = id;

    var songImage = document.createElement("img");
    songImage.classList.add("songImage");
    songImage.src = "images/" + image;

    song.appendChild(songImage);

    var songInfo = document.createElement("div");
    songInfo.classList.add("songInfo");

    var songTitle = document.createElement("div");
    songTitle.classList.add("songTitle");
    songTitle.innerHTML = name;
    songTitle.style.fontSize = 225 / name.length + "px";

    songInfo.appendChild(songTitle);

    var songDetails = document.createElement("div");
    songDetails.classList.add("songDetails");

    var songArtist = document.createElement("songArtist");
    songArtist.classList.add("songArtist");
    songArtist.innerHTML = artist;

    songDetails.appendChild(songArtist);

    var songDuration = document.createElement("div");
    songDuration.classList.add("songDuration");
    songDuration.innerHTML = duration;

    songDetails.appendChild(songDuration);

    songInfo.appendChild(songDetails);

    song.appendChild(songInfo);

    target.appendChild(song);
}

function loadSongs() {
    $(".songs").html("");

    for(i = 0; i < songs.length; i++) {
        generateSong(i, songs[i].image, songs[i].name, songs[i].artist, songs[i].duration, document.querySelector(".songs"));
    }
}

loadSongs();