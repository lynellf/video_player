# video_player
Treehouse Project 6

### Project Overview

-   #### Build the basic layout based on the mockups.

-   #### Implement a media player.

````
<div class="video__container">
  <video class="video__player" controls>
    <source src="video/video.mp4" type="video/mp4">
    <source src="video/video.ogg" type="video/ogg">
    <track src="captions.vtt" kind="subtitles" srclang="en" label="English">
    Your browser does not support the video tag
  </video>
</div>
````

    -   We recommend using the [mediaelement.js library](http://www.mediaelementjs.com/).
    -   You can either download the files and link to them locally
    -   Or use the CDN links on the mediaelement.js site. This method is usually preferable as it will keep your project updated with any new fixes and updates to the library.
    -   You will also need to include the jQuery library in your project.
    -   You can also implement your own custom media player using the Video API, or use an alternative media library, as long as it can perform the same as functions as described below.

-   #### Embed the two video formats using HTML.

    -   Check that the video works in at least **three** modern browsers. Please use Chrome and Firefox, Internet Explorer if you have a PC, and Safari if you have a Mac.
    -   Ensure that all controls work as expected in each browser you test. Check the following:
        -   Play and pause functionality
        -   Full screen mode
        -   Volume controls
        -   Progress bar

-   #### Add the transcript below the video (as shown in the mockup file).

    -   The text you'll use is located in the captions.txt file. Use appropriate `<p>` and/or `<span>` tags around the text when adding it to your project.
    
 ````
 <p>
    <span class="track">Now that we've looked at the architecture of the internet, let's see how you might</span>
    <span class="track">connect your personal devices to the internet inside your house.</span>
    <span class="track">Well there are many ways to connect to the internet, and </span>
    <span class="track">most often people connect wirelessly.</span>
</p>
 ````
    -   As the media playback time changes, sentences in the transcript should highlight. Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence. You can use the captions.txt file to see the times at which the words are spoken in the video.
    
````
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
````

-   #### Mobile first

    -   Make sure the HTML file includes the viewport meta tag in the head of the document.
    -   Use a mobile-first approach by writing your media queries using the `min-width` property in your CSS.
    -   Add a breakpoint for tablet and desktop sized screens at 768px and larger.

-   #### Style the page to roughly match the mockups for mobile and tablet-desktop as guides.

    -   Match the design as it should look on:
        -   mobile screen sizes.
        -   a tablet or desktop that is 768px wide using the desktop-form.png mockup.
