/* global: sessionStorage */

(function confirmSurvey () {
  var surveySelected = sessionStorage.getItem('select-survey')
  var insertSurvey = document.getElementById('insert-survey')
  insertSurvey.innerHTML = surveySelected
})()
