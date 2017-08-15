module.exports = {
  method: 'GET',
  path: '/last-week',
  handler: function (request, reply) {
    let data = {
      question: 'How were you feeling last week? You choose.'
    }
    reply.view('last-week', data)
  }
}
