/* global: location, sessionStorage */
var path = location.pathname.slice(1)

function buttonListeners() {

  if (path === 'select-survey') {
    var buttonsArr = Array.from(document.querySelectorAll("button[id]"))
    buttonsArr.forEach(function (item) {
      item.addEventListener('click', function () {
        sessionStorage.setItem(path, item.innerHTML)
        nextQuestion()
      })
    })
  }

  if (path === 'confirm-survey' || path === 'thank-you') {
    var myButton = Array.from(document.querySelectorAll('button'))
    myButton[0].addEventListener('click', function () {
      nextQuestion()
    })
  }

  if(path === 'login') {
    var myButton = document.getElementById('submit-login-button')
    //E-mail validation in the future refactoring
    myButton.addEventListener('click', function () {
    sessionStorage.setItem('e-mail', JSON.stringify(document.getElementById('clinician-email-input').value))
    nextQuestion()
    })
  }
}

buttonListeners();

function answerListeners() {
  var pathsArr = ['understand', 'like', 'help', 'come-again', 'today', 'last-week', 'friends', 'family', 'school', 'play', 'next-week']
  var answersArr = Array.from(document.querySelectorAll("figure[id]"))

  if (pathsArr.includes(path.toString())) {
    answersArr.forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.add("highlighted-option")
        sessionStorage.setItem(path, item.lastElementChild.innerHTML.toLowerCase())
        nextQuestion()
      })
    })
  }

  if(path === 'consent') {
    var survey = sessionStorage.getItem('select-survey')

    answersArr[1].addEventListener('click', function () {
      answersArr[1].classList.add("highlighted-option")
      sessionStorage.setItem(path, answersArr[1].lastElementChild.innerHTML.toLowerCase())
        window.location.pathname = "/thank-you"
    })

    answersArr[0].addEventListener('click', function () {
      answersArr[0].classList.add("highlighted-option")
      sessionStorage.setItem(path, answersArr[0].lastElementChild.innerHTML.toLowerCase())
      if (survey === 'pre-session') {
        window.location.pathname = "/today"
      } else {
        window.location.pathname = "/understand"
        }
      })
  }
}

function nextQuestion() {

  if (path === 'select-survey') {
    window.location.pathname = '/confirm-survey'
  }

  if (path === 'confirm-survey') {
    window.location.pathname = '/consent'
  }

  var preSessionArr = ['today', 'last-week', 'friends', 'family', 'school', 'play', 'next-week', 'thank-you', 'login', 'results']
  for (var i=0; i<preSessionArr.length-1; i++) {
    if (path===preSessionArr[i]) {
      window.location.pathname = `/${preSessionArr[i+1]}`
    }
  }

  var postSessionArr = ['understand', 'like', 'help', 'come-again', 'thank-you', 'login', 'results']
  for (var j=0; j<postSessionArr.length-1; j++) {
    if (path===postSessionArr[j]) {
      window.location.pathname = `/${postSessionArr[j+1]}`
    }
  }
}



  // function nextQuestion() {
  //   switch(path){
  //         case 'understand': window.location.pathname = "/help"
  //           break
  //         case 'help': window.location.pathname = "/like"
  //           break
  //         case 'like': window.location.pathname = "/come-again"
  //           break
  //         case 'come-again': window.location.pathname = "/thank-you"
  //             break
  //         case 'today': window.location.pathname = "/last-week"
  //             break
  //         case 'last-week': window.location.pathname = "family"
  //             break
  //         case 'family': window.location.pathname = "/friends"
  //             break
  //         case 'friends': window.location.pathname = "/school"
  //               break
  //         case 'school': window.location.pathname = "/play"
  //               break
  //         case 'play': window.location.pathname = "/next-week"
  //               break
  //         case 'next-week': window.location.pathname = "/thank-you"
  //               break
  //         case 'select-survey': window.location.pathname = "/confirm-survey"
  //               break
  //         case 'confirm-survey': window.location.pathname = "/consent"
  //               break
  //         case 'thank-you': window.location.pathname = "/login"
  //               break
  //         case 'login': window.location.pathname = "/results"
  //               break
  //   }
  // }
