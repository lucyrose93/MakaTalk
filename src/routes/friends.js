module.exports = {
  method: 'GET',
  path: '/friends',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/rm8obevqI94?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'How do you feel with your friends? You choose.'
    }
    reply.view('friends', data)
  }
}
