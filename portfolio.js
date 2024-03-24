function openInsta() {
    window.open("https://www.instagram.com", "_blank");
}

function openFacebook() {
    window.open("https://www.facebook.com", "_blank");
}

function openLinkedIn() {
    window.open("https://www.linkedin.com", "_blank");
}

function openGitHub() {
    window.open("https://www.github.com", "_blank");
}

function openVideo() {
    var videoUrl = 'video.mp4.mp4';
    window.open(videoUrl, "_blank");
}

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("day-theme");
    if( document.body.classList.contains("day-theme")){
        icon.src = "moon.png";
    }else{icon.src = "sun.png"}
}

