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

    var yesConsent = document.getElementById('yes-consent')
    yesConsent.addEventListener('click', function () {
      sessionStorage.setItem(path, 'yes')
    })

    var noConsent = document.getElementById('no-consent')
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
    var veryGood = document.getElementById('very-good-option')
    veryGood.addEventListener('click', function () {
      sessionStorage.setItem(path, 'very good')
    })

    var good = document.getElementById('good-option')
    good.addEventListener('click', function () {
      sessionStorage.setItem(path, 'good')
    })

    var ok = document.getElementById('ok-option')
    ok.addEventListener('click', function () {
      sessionStorage.setItem(path, 'ok')
    })

    var bad = document.getElementById('bad-option')
    bad.addEventListener('click', function () {
      sessionStorage.setItem(path, 'bad')
    })

    var veryBad = document.getElementById('very-bad-option')
    veryBad.addEventListener('click', function () {
      sessionStorage.setItem(path, 'very bad')
    })
  }

  // post-session responses
  if (path === 'listen' ||
    path === 'like' ||
    path === 'help' ||
    path === 'come-again') {
    var yes = document.getElementById('yes-agree')
    yes.addEventListener('click', function () {
      sessionStorage.setItem(path, 'yes')
    })

    var no = document.getElementById('no-disagree')
    no.addEventListener('click', function () {
      sessionStorage.setItem(path, 'no')
    })

    var maybe = document.getElementById('maybe')
    maybe.addEventListener('click', function () {
      sessionStorage.setItem(path, 'maybe')
    })
  }
})()
