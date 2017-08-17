/* global: location, sessionStorage */

(function collectAnswers () {
  var path = location.pathname.slice(1)

  // select survey type
  if (path === 'select-survey') {
    var preSession = document.getElementById('pre-session-button')
    preSession.addEventListener('click', function () {
      sessionStorage.setItem(path, 'pre-session')
      window.location.pathname = "/confirm-survey"
    })

    var postSession = document.getElementById('post-session-button')
    postSession.addEventListener('click', function () {
      sessionStorage.setItem(path, 'post-session')
      window.location.pathname = "/confirm-survey"
    })
  }

  if (path === 'confirm-survey'){
    var confirmButton = document.getElementById('confirm-survey-button')
    confirmButton.addEventListener('click', function () {
      window.location.pathname = "/consent"
    })
  }

  // obtain consent
  if (path === 'consent') {
    var survey = sessionStorage.getItem('select-survey')
    var yesConsent = document.getElementById('yes-consent')
    yesConsent.addEventListener('click', function () {
      sessionStorage.setItem(path, 'yes')
      if (survey==='pre-session') {
        window.location.pathname = "/today"
      } else {
        window.location.pathname = "/understand"
      }
    })

    var noConsent = document.getElementById('no-consent')
    noConsent.addEventListener('click', function () {
      sessionStorage.setItem(path, 'no')
      window.location.pathname = '/thank-you'
    })
  }

  if (path==='thank-you'){
    var okSubmit = document.getElementById('submit-survey-button')
    okSubmit.addEventListener('click', function(){
      window.location.pathname = '/login'
    })
  }

  if (path==='login'){
    var submitLoginDetails = document.getElementById('submit-login-button')
    submitLoginDetails.addEventListener('click', function(){
      var clinicianEmail = document.getElementById('clinician-email-input').value
      sessionStorage.setItem('clinician-email', clinicianEmail)
      window.location.pathname = '/results'
    })
  }

  // pre-session responses
  if (path === 'today' ||
    path === 'last-week' ||
    path === 'home' ||
    path === 'friends' ||
    path === 'family' ||
    path === 'school' ||
    path === 'play' ||
    path === 'next-week') {
    var veryGood = document.getElementById('very-good-option')
    veryGood.addEventListener('click', function () {
      sessionStorage.setItem(path, 'very good')
      nextQuestion()
    })

    var good = document.getElementById('good-option')
    good.addEventListener('click', function () {
      sessionStorage.setItem(path, 'good')
      nextQuestion()
    })

    var ok = document.getElementById('ok-option')
    ok.addEventListener('click', function () {
      sessionStorage.setItem(path, 'ok')
      nextQuestion()
    })

    var bad = document.getElementById('bad-option')
    bad.addEventListener('click', function () {
      sessionStorage.setItem(path, 'bad')
      nextQuestion()
    })

    var veryBad = document.getElementById('very-bad-option')
    veryBad.addEventListener('click', function () {
      sessionStorage.setItem(path, 'very bad')
      nextQuestion()
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
      nextQuestion()
    })

    var no = document.getElementById('no-disagree')
    no.addEventListener('click', function () {
      sessionStorage.setItem(path, 'no')
      nextQuestion()
    })

    var maybe = document.getElementById('maybe')
    maybe.addEventListener('click', function () {
      sessionStorage.setItem(path, 'maybe')
      nextQuestion()
    })
  }

  function nextQuestion() {
    switch(path){
          case 'understand': window.location.pathname = "/help"
            break
          case 'help': window.location.pathname = "/like"
            break
          case 'like': window.location.pathname = "/come-again"
            break
          case 'come-again': window.location.pathname = "/thank-you"
              break
          case 'today': window.location.pathname = "/last-week"
              break
          case 'last-week': window.location.pathname = "family"
              break
          case 'family': window.location.pathname = "/friends"
              break
          case 'friends': window.location.pathname = "/school"
                break
          case 'school': window.location.pathname = "/play"
                break
          case 'play': window.location.pathname = "/next-week"
                break
          case 'next-week': window.location.pathname = "/thank-you"
                break
    }
  }
})()
