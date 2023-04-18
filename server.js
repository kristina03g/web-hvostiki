const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 8081

const app = express()

var corOptions = {
  origin: 'https://localhost:8081'
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', router)
app.use(errorHandler)


const start = async () => {
  try {

    sequelize.authenticate()
    .then(() => {
      console.log('connected..')
    })
    .catch(err => {
      console.log('Error' + err)
    })

    sequelize.sync({force: false})
    .then(() => {
      console.log('yes re-sync done!')
    })

    app.listen(PORT, () => {
      console.log(`sever is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }

}

start()

//app.use('/api/admins', routerAdmin)
//app.use('/api/clients', routerClient)
//app.use('/api/donations', routerDonation)
//app.use('/api/pets', routerPet)
//app.use('/api/requests', routerRequest)

