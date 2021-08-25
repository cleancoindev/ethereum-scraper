const Sentry = require('@sentry/node')

if (process.env.NODE_ENV === 'production') {
  if (process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN
    })
  }
} else {
  require('dotenv').config()
}

const {
  MONGO_URI,
  WEB3_URI,
  PROCESS_TYPE
} = process.env

if (!MONGO_URI) throw new Error('The MONGO_URI setting was not provided.')
if (!WEB3_URI) throw new Error('The WEB3_URI setting was not provided.')

const mongoose = require('mongoose')
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', () => console.info('Connected to MongoDB.'))

switch (PROCESS_TYPE) {
  case 'api':
    require('./api')
    break
  case 'scraper':
    require('./scraper')
    break
  default:
    require('./api')
    require('./scraper')
}
