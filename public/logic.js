function changePage () {
  var currentPage = location.pathname.slice(1)
  var survey = sessionStorage.getItem('select-survey')
  switch (currentPage) {
    case 'select-survey': window.location.pathname = "/confirm-survey"
      break
    case 'confirm-survey': window.location.pathname = "/consent"
      break
    case 'consent': {
        if (survey==='pre-session') {
          window.location.pathname = "/today"
        } else {
          window.location.pathname = "/understand"
        }
    };
      break
    case 'understand': window.location.pathname = "/help"
      break
    case 'help': window.location.pathname = "/like"
      break
    case 'like': window.location.pathname = "/come-again"
      break
    case 'come-again': window.location.pathname = "/submit-survey"
        break
    case 'submit-survey': window.location.pathname = "/login"
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
    case 'next-week': window.location.pathname = "/submit-survey"
          break
    case 'submit-survey': window.location.pathname = "/login"
          break
  }
}

document.querySelectorAll('figure.five-videos, figure.three-videos, figure.two-videos, button#confirm-survey-button, button#ok-submit-survey, button#pre-session-button, button#post-session-button').forEach((e, i) => {
  e.addEventListener('click', changePage)
})
