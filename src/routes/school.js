module.exports = {
  method: 'GET',
  path: '/school',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/c_ft8OyYRdE?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'How do you feel at school? You choose.'
    }
    reply.view('school', data)
  }
}
