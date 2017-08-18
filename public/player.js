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

  function toggleHighlight(answer, arr, event) {
      for (var i=1; i<arr.length; i++) {
        if (arr[i].classList.contains("highlighted-option") === true) {
          arr[i].classList.remove("highlighted-option")
        }
      }
      answer.classList.add("highlighted-option")
      var endedTimes = 0;
      if (answer === arr[arr.length-1] && event.data == YT.PlayerState.PLAYING) {
        endedTimes++;
        // console.log('endedtimes', endedTimes)
      }
       if (endedTimes === 1 && YT.PlayerState.ENDED) {
        console.log('Yey!');
          answer.classList.remove("highlighted-option")
          eventListenersToAnswers()
          // console.log('event', eventListenersToAnswers())
        }
  }

  // function toggleHighlight(answer, arr, event) {
  //     for (var i=1; i<arr.length; i++) {
  //       if (arr[i].classList.contains("highlighted-option") === true) {
  //         arr[i].classList.remove("highlighted-option")
  //         var j=i;
  //       }
  //       answer.classList.add("highlighted-option")
  //       console.log(j, arr.length-1, 'fuccc');
  //       if (j==arr[arr.length-1] && event.data == YT.PlayerState.ENDED) {
  //         answer.classList.remove("highlighted-option")
  //         console.log('event', eventListenersToAnswers())
  //         // setTimeout(function() {addEventListersAnswers()}, 1000)
  //       }
  //     }
  // }

  function onPlayerStateChange(event) {
    // console.log('my status', event.data);
    var currentIndex = player.getPlaylistIndex()
    var myFuncCalls = 0;

    var path = location.pathname.slice(1)
    var answersArr = Array.from(document.getElementsByTagName("FIGURE"));
      if (path === 'consent') {
          switch (currentIndex) {
            case 1:
              toggleHighlight(answersArr[1], answersArr, event)
              break
            case 2:
              toggleHighlight(answersArr[2], answersArr, event)
          }
      }

      if (path === 'family' ||
        path === 'friends' ||
        path === 'last-week' ||
        path === 'next-week' ||
        path === 'play' ||
        path === 'school' ||
        path === 'today') {
          switch (currentIndex) {
            case 1:
              toggleHighlight(answersArr[1], answersArr, event)
              break
            case 2:
              toggleHighlight(answersArr[2], answersArr, event)
              break
            case 3:
              toggleHighlight(answersArr[3], answersArr, event)
              break
            case 4:
              toggleHighlight(answersArr[4], answersArr, event)
              break
            case 5:
              toggleHighlight(answersArr[5], answersArr, event)
          }
      }

      if (path === 'help' ||
        path === 'like' ||
        path === 'understand' ||
        path === 'come-again') {
          switch (currentIndex) {
            case 1:
              toggleHighlight(answersArr[1], answersArr, event)
              break
            case 2:
              toggleHighlight(answersArr[2], answersArr, event)
              break
            case 3:
              toggleHighlight(answersArr[3], answersArr, event)
          }
      }
  }

})()
