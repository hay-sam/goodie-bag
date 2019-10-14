'use strict'
const Candy = require("../db/models/Candy")

const router = require('express').Router()

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.get('/candies', async (req, res) => {
  try {
    const data = await Candy.findAll()
    res.send(data)
  } catch (err) {
    console.error(err)
  }
})
router.get('/candies/:id', async (req, res) => {
  try {
    const data = await Candy.findById(req.params.id)
    res.send(data)
  } catch (err) {
    console.error(err)
  }
})
router.put('/candies/:id', async (req, res) => {
  try {
    const candy = await Candy.findById(req.params.id)
    await candy.update(req.body)
    res.status(200)
  } catch (err) {
    console.error(err)
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
