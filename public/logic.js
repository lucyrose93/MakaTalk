/* global: location, sessionStorage */
// (function myLogic() {
var path = location.pathname.slice(1)

var toArray = function(arrayLike) {
  return [].slice.call(arrayLike, 0)
}

function buttonListeners() {

  if (path === 'select-survey') {
    var buttonsArr = toArray(document.querySelectorAll("button[id]"))
    buttonsArr.forEach(function (item) {
      item.addEventListener('click', function () {
        sessionStorage.setItem(path, item.textContent)
        navigateToNextQuestion(path)
      })
    })
  }

  if (path === 'confirm-survey' || path === 'thank-you') {
    var myButton = toArray(document.querySelectorAll('button'))
    myButton[0].addEventListener('click', function () {
      navigateToNextQuestion(path)
    })
  }

  if(path === 'login') {
    var myButton = document.getElementById('submit-login-button')
    //E-mail validation in the future refactoring
    myButton.addEventListener('click', function () {
    sessionStorage.setItem('e-mail', JSON.stringify(document.getElementById('clinician-email-input').value))
    navigateToNextQuestion(path)
    })
  }
}

buttonListeners();

function answerListeners() {
  var pathsArr = ['understand', 'like', 'help', 'come-again', 'today', 'last-week', 'friends', 'family', 'school', 'play', 'next-week']
  var answersArr = toArray(document.querySelectorAll("figure[id]"))

    if (pathsArr.indexOf(path.toString()) !== -1) {
    answersArr.forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.add("highlighted-option")
        sessionStorage.setItem(path, item.lastElementChild.textContent.toLowerCase())
        navigateToNextQuestion(path)
      })
    })
  }

  if(path === 'consent') {
    var survey = sessionStorage.getItem('select-survey')

    answersArr[1].addEventListener('click', function () {
      answersArr[1].classList.add("highlighted-option")
      sessionStorage.setItem(path, answersArr[1].lastElementChild.textContent.toLowerCase())
        window.location.pathname = "/thank-you"
    })

    answersArr[0].addEventListener('click', function () {
      answersArr[0].classList.add("highlighted-option")
      sessionStorage.setItem(path, answersArr[0].lastElementChild.textContent.toLowerCase())
      if (survey === 'pre-session') {
        window.location.pathname = "/today"
      } else {
        window.location.pathname = "/understand"
        }
      })
  }
}

var nextQuestion = {
['select-survey']: 'confirm-survey',
['confirm-survey']  : 'consent',
  understand: 'help',
  help: 'like',
  like: 'come-again',
  ['come-again']: 'thank-you',
  today: 'last-week',
  ['last-week']: 'family',
  family: 'friends',
  friends: 'school',
  school: 'play',
  play: 'next-week',
  ['next-week']: 'thank-you',
  ['thank-you']: 'login',
  login: 'results'
}

var navigateToNextQuestion = function(previous) {
  var next = nextQuestion[previous]
  if (!next) {
    window.location.pathname='/not-found'
    return
  }
  window.location.pathname= '/' + next
}
// })()
