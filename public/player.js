(function() {
  // Load IFrame Player API code asynchronously.
  var tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  /* Create an <iframe> (and YouTube player)
     after the API request is completed. */
  var player

  function onYouTubeIframeAPIReady() {
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
  function onPlayerReady(event) {
    event.target.playVideo()
  }

  tag.onload = function() {
    YT.ready(onYouTubeIframeAPIReady);
  };

  function toggleHighlight(x) {
    x.classList.toggle("highlighted-option")
    setTimeout(function() {
      x.classList.remove("highlighted-option")
    }, 3000)
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      var currentIndex = player.getPlaylistIndex()
      var path = location.pathname.slice(1)

      if (path === 'consent') {
        var yesConsent = document.getElementById('yes-consent')
        var noConsent = document.getElementById('no-consent')
        switch (currentIndex) {
          case 1:
            toggleHighlight(yesConsent)
            break
          case 2:
            toggleHighlight(noConsent)
        }
      }

      if (path === 'family' ||
        path === 'friends' ||
        path === 'last-week' ||
        path === 'next-week' ||
        path === 'play' ||
        path === 'school' ||
        path === 'today') {
        var veryGoodOption = document.getElementById('very-good-option')
        var goodOption = document.getElementById('good-option')
        var okOption = document.getElementById('ok-option')
        var badOption = document.getElementById('bad-option')
        var veryBadOption = document.getElementById('very-bad-option')
        switch (currentIndex) {
          case 1:
            toggleHighlight(veryGoodOption)
            break
          case 2:
            toggleHighlight(goodOption)
            break
          case 3:
            toggleHighlight(okOption)
            break
          case 4:
            toggleHighlight(badOption)
            break
          case 5:
            toggleHighlight(veryBadOption)
        }
      }

      if (path === 'help' ||
        path === 'like' ||
        path === 'understand') {
        var yesAgree = document.getElementById('yes-agree')
        var noDisagree = document.getElementById('no-disagree')
        var maybe = document.getElementById('maybe')
        switch (currentIndex) {
          case 1:
            toggleHighlight(yesAgree)
            break
          case 2:
            toggleHighlight(noDisagree)
            break
          case 3:
            toggleHighlight(maybe)
        }
      }
    }
  }
})();
