const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')
const search = require('./modules/search')
const users = require('./modules/users') //add users source

router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/sort', sort)
router.use('/search', search)
router.use('/users', users) //add users router

module.exports = router