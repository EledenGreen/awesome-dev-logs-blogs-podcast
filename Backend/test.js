const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3003

// Middleware
app.use(express.json())

// Connect to MongoDB Atlas
const mongoURI =
  'mongodb+srv://ell:tcNVov3QaFlsJoVh@cluster0.09jpazb.mongodb.net/awesome-dev-logs&blogs?retryWrites=true&w=majority'
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err))

// Define a simple schema and model for demonstration
const devSchema = new mongoose.Schema({
  name: String,
  skill: String,
})
const Dev = mongoose.model('Dev', devSchema)

// Define /api/devs endpoint
app.get('/api/devs', async (req, res) => {
  try {
    const devs = await Dev.find()
    res.json(devs)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)
