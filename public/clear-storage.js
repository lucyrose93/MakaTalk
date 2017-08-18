var clearStorage = document.getElementById('done-button')

clearStorage.addEventListener('click', function(){
  var confirmDoneMessage = document.getElementById('confirm-done-message')
  confirmDoneMessage.style.display="inherit"
})

var confirmDoneButton = document.getElementById('confirm-done-button')
confirmDoneButton.addEventListener('click', function(){
  sessionStorage.clear()
  window.location.pathname = 'storage-cleared'
})
