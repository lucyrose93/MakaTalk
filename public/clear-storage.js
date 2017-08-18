(function clearStorage() {

  var path = location.pathname.slice(1)
  if (path === "results"){
    var finishButton = document.getElementById('finish-button')

    finishButton.addEventListener('click', function() {
      var confirmDoneMessage = document.getElementById('confirm-done')
      confirmDoneMessage.style.visibility = "visible"
    })

    var confirmDoneButton = document.getElementById('confirm-done-button')
    confirmDoneButton.addEventListener('click', function() {
      sessionStorage.clear()
      window.location.pathname = 'storage-cleared'
    })
  }
})()
