/* global: location, sessionStorage */

(function resultsPage () {
  var path = location.pathname.slice(1)
    if (path === "results") {
      var insertAnswers = document.getElementById('insert-answers')
      var surveyType = sessionStorage.getItem('select-survey')

        if (surveyType === 'pre-session') {
          var preSessionQuestions = ['consent', 'today', 'last-week', 'family', 'friends', 'school', 'play', 'next-week']
            for (var i = 0; i < preSessionQuestions.length; i++){
              var logAnswer = sessionStorage.getItem(preSessionQuestions[i])
                if (logAnswer) {
                  var newPara = document.createElement('p')
                  var addResponse = document.createTextNode(logAnswer)
                  newPara.appendChild(addResponse)
                  var div = document.getElementById('insert-answers')
                  insertAnswers.appendChild(newPara)                  
                }
                else {
                  document.createElement('p').appendChild(document.createTextNode('No answer'))
                }
            }
        }
        else if (surveyType === 'post-session') {
          var postSessionResponses = ['consent', 'understand', 'help', 'like', 'come-again']
          var postSessionAnswers = []
            for (var i = 0; i < postSessionResponses.length; i++){
              postSessionAnswers.push(sessionStorage.getItem(postSessionResponses[i]))
            }
            insertAnswers.textContent = postSessionAnswers
        }
        else {
          insertAnswers.textContent = 'no results available'
        }
    }
    else return
  })();
