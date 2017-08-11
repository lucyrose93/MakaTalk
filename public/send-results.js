/* global: location, sessionStorage */

(function() {
  var path = location.pathname.slice(1)

  if (path === "login") {
    var submitSurveyButton = document.getElementById('submit-survey-button')
    var clinicianEmailInput = document.getElementById('clinician-email-input')
    submitSurveyButton.addEventListener('click', function() {
      var storeClinicianEmail = sessionStorage.setItem('clinician-email', clinicianEmailInput.value)


      //SORT THIS!
    })
  }

  if (path === "results") {
    var sendResultsButton = document.getElementById('send-results-button')
    var sessionStorage = window.sessionStorage
    var clinicianEmail = sessionStorage['clinician-email']
    var emailSubject = sessionStorage['select-survey'] + ' results ' + Date()
    var emailBody = JSON.stringify(sessionStorage)
    emailBody = emailBody.replace(/[{}"]/g, ' ').slice(emailBody.indexOf(",") + 2, emailBody.lastIndexOf(","))

    var mailToClinicianURL = 'mailto:' + clinicianEmail + '?subject=' + emailSubject + '&body=' + emailBody

    sendResultsButton.href = mailToClinicianURL
  }
})()
