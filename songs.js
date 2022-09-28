var songs = [
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48"
    },
    {
        image: "blanknote.jpg",
        name: "Song Number 1",
        artist: "Artist Name",
        duration: "1:48"
    },
]

function generateSong(id, image, name, artist, duration) {
    var song = document.createElement("div");
    song.classList.add("song");
    song.id = id;

    var songImage = document.createElement("img");
    songImage.classList.add("songImage");
    songImage.src = "images/" + image;

    song.appendChild(songImage);
}