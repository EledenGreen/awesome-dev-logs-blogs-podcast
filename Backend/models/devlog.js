const mongoose = require('mongoose')

const devSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  dev: String,
  type: String,
  genre: String,
  url: String,
})

devSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Dev', devSchema)
