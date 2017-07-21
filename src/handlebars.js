const handlebars = require('handlebars')

module.exports = {
  engines: {
    hbs: handlebars
  },
  path: 'views/pages',
  relativeTo: __dirname,
  layout: 'default',
  layoutPath: 'views/layout',
  partialsPath: 'views/partials',
  helpersPath: 'views/helpers'
}
