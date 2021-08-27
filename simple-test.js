require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

runTest()

async function runTest () {
  console.log('[SIMPLE-TEST] Obtained MONGO_URI:', MONGO_URI)
}
