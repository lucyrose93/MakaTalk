(function collectAnswers () {

  // select survey type
  if (location.pathname === '/select-survey') {
    var preSession = document.getElementById('pre-session-button')
    preSession.addEventListener('click', function () {
      sessionStorage.setItem('survey', 'pre-session')
    })

    var postSession = document.getElementById('post-session-button')
    postSession.addEventListener('click', function () {
      sessionStorage.setItem('survey', 'post-session')
    })
  }

  // obtain consent
  if (location.pathname === '/consent') {
    var yes = document.getElementById('yes')
    yes.addEventListener('click', function () {
      sessionStorage.setItem('consent', 'yes')
    })

    var no = document.getElementById('no')
    no.addEventListener('click', function () {
      sessionStorage.setItem('consent', 'no')
    })
  }

  // pre-session responses
  if (location.pathname === '/today' ||
    location.pathname === '/last-week' ||
    location.pathname === '/home' ||
    location.pathname === '/friends' ||
    location.pathname === '/school' ||
    location.pathname === '/play' ||
    location.pathname === 'next-week') {
    var veryGood = document.getElementById('very-good')
    veryGood.addEventListener('click', function () {
      sessionStorage.setItem((location.pathname).slice(1), 'very good')
    })

    var good = document.getElementById('good')
    good.addEventListener('click', function () {
      sessionStorage.setItem((location.pathname).slice(1), 'good')
    })

    var ok = document.getElementById('ok')
    ok.addEventListener('click', function () {
      sessionStorage.setItem((location.pathname).slice(1), 'ok')
    })

    var bad = document.getElementById('bad')
    bad.addEventListener('click', function () {
      sessionStorage.setItem((location.pathname).slice(1), 'bad')
    })

    var veryBad = document.getElementById('very-bad')
    veryBad.addEventListener('click', function () {
      sessionStorage.setItem((location.pathname).slice(1), 'very bad')
    })
  }

  // post-session responses
  if (location.pathname === '/listen' ||
    location.pathname === '/like' ||
    location.pathname === '/help' ||
    location.pathname === '/come-again') {
    var yes = document.getElementById('yes')
    yes.addEventListener('click', function () {
      sessionStorage.setItem((location.pathname).slice(1), 'yes')
    })

    var no = document.getElementById('no')
    no.addEventListener('click', function () {
      sessionStorage.setItem((location.pathname).slice(1), 'no')
    })

    var maybe = document.getElementById('maybe')
    maybe.addEventListener('click', function () {
      sessionStorage.setItem((location.pathname).slice(1), 'maybe')
    })
  }
})()
