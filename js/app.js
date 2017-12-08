const video = $('video');
const player = document.querySelector('video');
const tracks = document.querySelectorAll('.track');
const time = player.currentTime;
const chkpt = {
  start: [
    0.000, 4.130, 7.535,
    11.270, 13.960, 17.940,
    22.370, 26.880, 30.920,
    32.100, 34.730, 39.430,
    41.190, 42.350, 46.300,
    49.270, 53.760, 57.780
  ],
  end: [
    4.130, 7.535, 11.270,
    13.960, 17.940, 22.370,
    26.880, 30.920, 32.100,
    34.730, 39.430, 41.190,
    42.350, 46.300, 49.270,
    53.760, 57.780, 60.150
  ]
}
video.mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen']
});
player.ontimeupdate = () => {
    // if(player.currentTime > 0 && player.currentTime <=  4.130) {
    //     tracks[0].className += ' active';
    // } else {
    //     tracks[0].className = 'track';
    // }
    // if(player.currentTime > 4.130 && player.currentTime <=  7.535) {
    //     tracks[1].className += ' active';
    // } else {
    //     tracks[1].className = 'track';
    // }
    // if(player.currentTime > 7.535 && player.currentTime <=  11.270) {
    //     tracks[2].className += ' active';
    // } else {
    //     tracks[2].className = 'track';
    // }
    // if(player.currentTime > 11.270 && player.currentTime <=  13.960) {
    //     tracks[3].className += ' active';
    // } else {
    //     tracks[3].className = 'track';
    // }
    // if(player.currentTime > 13.960 && player.currentTime <=  17.940) {
    //     tracks[4].className += ' active';
    // } else {
    //     tracks[4].className = 'track';
    // }
    // if(player.currentTime > 7.535 && player.currentTime <=  11.270) {
    //     tracks[2].className += ' active';
    // } else {
    //     tracks[2].className = 'track';
    // }

    for (let i = 0; i < tracks.length; i++) {
      let prevTrk= i-1;
      if(player.currentTime > chkpt.start[i] && player.currentTime <= chkpt.end[i]) {
        tracks[i].className += ' active';
      } else {
        tracks[i].className = 'track';
      }
    }
}
