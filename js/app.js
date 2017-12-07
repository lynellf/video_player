const video = $('video');
const player = document.querySelector('video');
const tracks = document.querySelectorAll('.track');
video.mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen']
});
player.ontimeupdate = () => {
    if(player.currentTime > 0 && player.currentTime <=  4.130) {
        tracks[0].className += ' active';
    } else {
        tracks[0].className = 'track';
    }
}


