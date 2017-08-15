/* global: location, sessionStorage */

(function sendResults() {
  var path = location.pathname.slice(1)
  if (path === "login") {
    var submitSurveyButton = document.getElementById('submit-survey-button')
    submitSurveyButton.addEventListener('click', function() {
      var clinicianEmail = document.getElementById('clinician-email-input').value
      var storage = window.sessionStorage
      var setClinicianEmail = storage.setItem('clinician-email', clinicianEmail)
    })
  }

  if (path === "results") {
    var storage = window.sessionStorage
    var clinicianEmail = storage.getItem('clinician-email')
    var emailSubject = storage.getItem('select-survey')
    var currentTime = Date()
    var answers = []

    if (emailSubject === 'pre-session') {
      var questions = ['consent', 'today', 'last-week', 'family', 'friends', 'school', 'play', 'next-week']
    }
    if (emailSubject === 'post-session') {
      var questions = ['consent', 'understand', 'help', 'like', 'come-again']
    }
      for (var i=0; i<questions.length; i++) {
        var x = storage.getItem(questions[i])
        if (x) answers.push(x)
        else {answers.push('no answer')}
      }

    // var mailToClinicianURL = 'mailto:' + clinicianEmail + '?subject=' + emailSubject + currentTime + '&body=' + 'hi'

    var sendResultsButton = document.getElementById('send-results-button')

    sendResultsButton.href = "mailto:lucy.rose.sabin@gmail.com"
  }
})()
