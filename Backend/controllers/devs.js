const devsRouter = require('express').Router()
const Dev = require('../models/devlog')

devsRouter.get('/', async (request, response) => {
  const devs = await Dev.find({})
  response.json(devs)
})

devsRouter.post('/', async (request, response) => {
  const body = request.body
  console.log(body)

  const dev = new Dev({
    name: body.name,
    dev: body.dev,
    type: body.type,
    genre: body.genre,
    url: body.url,
  })

  const saveDev = await dev.save()
  response.status(201).json(saveDev)
})

module.exports = devsRouter
