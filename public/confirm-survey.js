/* global: location, sessionStorage */

(function confirmSurvey () {
  var path = location.pathname.slice(1)
  if (path === "confirm-survey"){
    var surveySelected = sessionStorage.getItem('select-survey')
    var insertSurvey = document.getElementById('insert-survey')
    insertSurvey.textContent = surveySelected
  }
})()
