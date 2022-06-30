const mongoose = require('mongoose')
const Restaurantlist = require('../restaurantlist')
const restaurantsList = require('../../restaurants.json').results

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')

  for (let i = 0; i < restaurantsList.length; i++) {
    Restaurantlist.create({
      ...restaurantsList[i]
    })
  }

  console.log('done.')
})