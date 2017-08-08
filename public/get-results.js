/* global: location, sessionStorage */

(function resultsPage() {

    var path = location.pathname.slice(1)
    if (path === 'results') {

      var surveyType = sessionStorage.getItem('select-survey')
      document.getElementById('survey-type').textContent = surveyType

      if (surveyType === 'pre-session') {
        var surveyQuestions = ['consent', 'today', 'last-week', 'family', 'friends', 'school', 'play', 'next-week']
      } else if (surveyType === 'post-session') {
        var surveyQuestions = ['consent', 'understand', 'help', 'like', 'come-again']
      }

      for (var i = 0; i < surveyQuestions.length; i++) {
        var currentQuestion = surveyQuestions[i].replace('-', ' ')
        currentQuestion = currentQuestion.charAt(0).toUpperCase() + currentQuestion.slice(1)
        var logAnswer = sessionStorage.getItem(surveyQuestions[i])
        if (logAnswer) {
          var addResponse = document.createTextNode(currentQuestion + ': ' + logAnswer)
        } else {
          var addResponse = document.createTextNode(currentQuestion + ': no answer')
        }
        var newPara = document.createElement('p')
        newPara.appendChild(addResponse)
        var insertAnswers = document.getElementById('insert-answers')
        insertAnswers.appendChild(newPara)
    }
  }
})();
