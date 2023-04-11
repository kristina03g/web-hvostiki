const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
  origin: 'https://localhost:8081'
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 8081

const routerAdmin = require('./routes/adminRouter.js')
const routerClient = require('./routes/clientRouter.js')
const routerDonation = require('./routes/donationRouter.js')
const routerPet = require('./routes/petRouter.js')
const routerRequest = require('./routes/requestRouter.js')
app.use('/api/admins', routerAdmin)
app.use('/api/clients', routerClient)
app.use('/api/donations', routerDonation)
app.use('/api/pets', routerPet)
app.use('/api/requests', routerRequest)


app.get('/', (req, res) => {
  res.json({message: 'hello from api'})
})

app.listen(PORT, () => {
  console.log(`sever is running on port ${PORT}`)
})