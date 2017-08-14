(function () {
  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

/* This function creates an <iframe> (and YouTube player)
   after the API code downloads. */
var player
function onYouTubeIframeAPIReady () {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    playerVars: {
      listType: 'playlist',
      list: playlist_id,
      controls: 0,
      showinfo: 0,
      rel: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

// The API will call this function when the video player is ready.
function onPlayerReady (event) {
  event.target.playVideo()
}

tag.onload = function() {
      YT.ready(onYouTubeIframeAPIReady);
    };

function onPlayerStateChange (event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var currentIndex = player.getPlaylistIndex()
    console.log('My index is ' + currentIndex)
    //   switch(currentIndex) {
    // case 1:
    //     document.getElementById("yes-consent").style.color = "#ff0000";
    //     break;
    // case 2:
    //     document.getElementById("no-consent").style.color = "blue";
    //     break;
    //   }
  }
}
})();
