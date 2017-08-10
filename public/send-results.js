//if page is welcome page



var path = location.pathname.slice(1)

if (path === "login") {
  var submitSurveyButton = document.getElementById('submit-survey-button')
  var clinicianEmailInput = document.getElementById('clinician-email-input')
  submitSurveyButton.addEventListener('click', function () {
    var storeClinicianEmail = sessionStorage.setItem('clinician-email', clinicianEmailInput.value)
  })
}

if (path === "results"){

  var sendResultsButton = document.getElementById('send-results-button')
  var getSessionStorage = window.sessionStorage
  var getClinicianEmail = getSessionStorage['clinician-email']
  var emailSubject = getSessionStorage['select-survey'] + ' results ' + Date()
  var emailBody = JSON.stringify(getSessionStorage)
  emailBody = emailBody.replace(/[{}"]/g, ' ')

  var mailToClinicianURL = 'mailto:' + getClinicianEmail + '?subject=' + emailSubject + '&body=' + emailBody

  sendResultsButton.href = mailToClinicianURL

}




// subject is equal to type of survey & timestamp, body is equal to results


// sendResults.addEventListener("click", function(){console.log('hey')})
