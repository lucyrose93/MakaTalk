(function playVideos() {
  // Load IFrame Player API code asynchronously.
  var tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  /* Create an <iframe> (and YouTube player) after the API request is completed. */
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

  function toggleHighlight(answer, arr) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i].classList.contains("highlighted-option") === true) {
        arr[i].classList.remove("highlighted-option")
      }
    }
    answer.classList.add("highlighted-option")
    if (event.data == YT.PlayerState.ENDED) {
      console.log('I finished!')
    }
  }

  function onPlayerStateChange(event) {

    var currentIndex = player.getPlaylistIndex()

    if (event.data == YT.PlayerState.PLAYING) {
      var path = location.pathname.slice(1)

      if (path === 'consent') {
        var twoAnswers = [yesConsent, noConsent] = [document.getElementById('yes-consent'), document.getElementById('no-consent')]
        console.log('Here are my 2 answers', twoAnswers)
        switch (currentIndex) {
          case 1:
            toggleHighlight(yesConsent, twoAnswers)
            break
          case 2:
            toggleHighlight(noConsent, twoAnswers)
        }
      }

      if (path === 'family' ||
        path === 'friends' ||
        path === 'last-week' ||
        path === 'next-week' ||
        path === 'play' ||
        path === 'school' ||
        path === 'today') {
        var fiveAnswers = [veryGoodOption, goodOption, okOption, badOption, veryBadOption] = [document.getElementById('very-good-option'), document.getElementById('good-option'), document.getElementById('ok-option'), document.getElementById('bad-option'), document.getElementById('very-bad-option')]

        switch (currentIndex) {
          case 1:
            toggleHighlight(veryGoodOption, fiveAnswers )
            break
          case 2:
            toggleHighlight(goodOption, fiveAnswers)
            break
          case 3:
            toggleHighlight(okOption, fiveAnswers)
            break
          case 4:
            toggleHighlight(badOption,fiveAnswers)
            break
          case 5:
            toggleHighlight(veryBadOption, fiveAnswers)
        }
      }

      if (path === 'help' ||
        path === 'like' ||
        path === 'understand' ||
        path === 'come-again') {
        var threeAnswers = [yesAgree, maybe, noDisagree] = [document.getElementById('yes-agree'), document.getElementById('maybe'), document.getElementById('no-disagree')]
        switch (currentIndex) {
          case 1:
            toggleHighlight(yesAgree, threeAnswers)
            break
          case 2:
            toggleHighlight(maybe, threeAnswers)
            break
          case 3:
            toggleHighlight(noDisagree, threeAnswers)
        }
      }
    }
  }
})()
