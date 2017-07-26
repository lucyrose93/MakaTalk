/* global: location, sessionStorage */

(function collectAnswers () {

  var path = location.pathname.slice(1)

  // select survey type
  if (path === 'select-survey') {
    var preSession = document.getElementById('pre-session-button')
    preSession.addEventListener('click', function () {
      sessionStorage.setItem(path, 'pre-session')
    })

    var postSession = document.getElementById('post-session-button')
    postSession.addEventListener('click', function () {
      sessionStorage.setItem(path, 'post-session')
    })
  }

  // obtain consent
  if (path === 'consent') {
    var yesConsent = document.getElementById('yes')
    yesConsent.addEventListener('click', function () {
      sessionStorage.setItem(path, 'yes')
    })

    var noConsent = document.getElementById('no')
    noConsent.addEventListener('click', function () {
      sessionStorage.setItem(path, 'no')
    })
  }

  // pre-session responses
  if (path === 'today' ||
    path === 'last-week' ||
    path === 'home' ||
    path === 'friends' ||
    path === 'school' ||
    path === 'play' ||
    path === 'next-week') {
    var veryGood = document.getElementById('very-good')
    veryGood.addEventListener('click', function () {
      sessionStorage.setItem(path, 'very good')
    })

    var good = document.getElementById('good')
    good.addEventListener('click', function () {
      sessionStorage.setItem(path, 'good')
    })

    var ok = document.getElementById('ok')
    ok.addEventListener('click', function () {
      sessionStorage.setItem(path, 'ok')
    })

    var bad = document.getElementById('bad')
    bad.addEventListener('click', function () {
      sessionStorage.setItem(path, 'bad')
    })

    var veryBad = document.getElementById('very-bad')
    veryBad.addEventListener('click', function () {
      sessionStorage.setItem(path, 'very bad')
    })
  }

  // post-session responses
  if (path === 'listen' ||
    path === 'like' ||
    path === 'help' ||
    path === 'come-again') {
    var yes = document.getElementById('yes')
    yes.addEventListener('click', function () {
      sessionStorage.setItem(path, 'yes')
    })

    var no = document.getElementById('no')
    no.addEventListener('click', function () {
      sessionStorage.setItem(path, 'no')
    })

    var maybe = document.getElementById('maybe')
    maybe.addEventListener('click', function () {
      sessionStorage.setItem(path, 'maybe')
    })
  }
})()
