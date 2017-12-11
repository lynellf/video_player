const video = $('video'),
player = document.querySelector('video'),
tracks = $('.track'),
chkpt = {
  start: [
    0.240, 4.130, 7.535, 11.270, 
    13.960, 17.940, 22.370, 26.880, 
    32.100, 34.730, 39.430, 42.350, 
    46.300, 49.270, 53.760, 57.780
  ],
  end: [
    4.130, 7.535, 11.270, 13.960, 
    17.940, 22.370, 26.880, 30.920, 
    34.730, 39.430, 41.190, 46.300, 
    49.270, 53.760, 57.780, 60.150
  ]
};

video.mediaelementplayer({
    features: [
        'playpause', 'current', 'progress', 
        'duration', 'tracks', 'volume', 'fullscreen'
    ],
    videoWidth: '100%',
    videoHeight: '100%',
    enableAutosize: true
});

// Highlight transcript text as video plays.
// The start and end checkpoints of the video transcript are
// matched to the index position of each track class.

// For as long as the timestamp falls between the start and end
// checkpoint, the track class shall be modified to change state.

// jQuery selectors did not function as intended for toggling the
// className of each track in the array. Thus, I resorted to vanilla JS.

player.ontimeupdate = () => {
    const time = player.currentTime,
    start = chkpt.start,
    end = chkpt.end;

    for (let i = 0; i < tracks.length; i++) {
      if(time > start[i] && time < end[i]) {
        tracks[i].className += ' active';
      } else {
        tracks[i].className = 'track';
      }
    }
}

// Enable clicking of transcript to 
// change the currentTime of the video.

tracks.on( 'click', (event)=> {
    const pos = tracks.index(event.target),
    start = chkpt.start;
    player.currentTime = start[pos];
});
