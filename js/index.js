var vid = document.getElementById("video");

function playVid() {
    if(vid.paused){
        vid.play();
    } else {
        vid.pause();
    }
}