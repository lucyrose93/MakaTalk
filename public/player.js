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

  var funcCount = (function () {
      var counter = 0;
      return function () {return counter += 1;}
  })();

  function toggleHighlight(answer, answersArr, event) {
      for (var i=1; i<answersArr.length; i++) {
          answersArr[i].classList.remove("highlighted-option")
      }
      answer.classList.add("highlighted-option")

      if (answer === answersArr[answersArr.length-1]) {
        var myFuncCount = funcCount();
      }
      if(myFuncCount === 5) {
        answer.classList.remove("highlighted-option")
        answerListeners()
      }
  }

  var toArray = function(arrayLike) {
    return [].slice.call(arrayLike, 0)
  }
  
  function onPlayerStateChange(event) {
    var currentIndex = player.getPlaylistIndex()

    var path = location.pathname.slice(1)
    var answersArr = toArray(document.getElementsByTagName("FIGURE"));
      if (currentIndex !== 0) {
        toggleHighlight(answersArr[currentIndex], answersArr, event)
      }
  }

})()
