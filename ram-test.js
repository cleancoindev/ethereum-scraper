require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI
console.log('[TEST] Running with MONGO_URI:', MONGO_URI)

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', () => console.info('Connected to MongoDB.'))

// Create schema/model for testing
const CharacterSchema = new mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
})
const Character = mongoose.model('Character', CharacterSchema)

runTest()

async function runTest () {
  const data = await Character.find({}).exec()
  console.log('Rick and Morty characters:')
  console.log(data)
}
