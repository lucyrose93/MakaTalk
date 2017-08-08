/* global: location, sessionStorage */

(function resultsPage () {
  var path = location.pathname.slice(1)
    if (path === "results") {
      var insertAnswers = document.getElementById('insert-answers')
      var surveyType = sessionStorage.getItem('select-survey')

        if (surveyType === 'pre-session') {
          var preSessionResponses = ['consent', 'today', 'last-week', 'family', 'friends', 'school', 'play', 'next-week']
          var preSessionAnswers = []
            for (var i = 0; i < preSessionResponses.length; i++){
              preSessionAnswers.push(sessionStorage.getItem(preSessionResponses[i]))
            }
            insertAnswers.textContent = preSessionAnswers
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
