var surveySelected = sessionStorage.getItem('select-survey')

var insertSurvey = document.getElementById('insert-survey')

function confirmSurvey () {
  insertSurvey.innerHTML = surveySelected
}

confirmSurvey();
