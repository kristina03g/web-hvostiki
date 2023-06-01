const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 8081

const app = express()

let corsOptions = {
  origin: [ 'http://localhost:8081', 'http://localhost:3000' ]
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

//app.use(methodOverride());
//app.use(multipart());
//app.use(bodyParser({keepExtensions:true, uploadDir:path.join(__dirname,'/files')}))

app.use(express.urlencoded({extended: true}))
app.use('/api', router)
app.use(errorHandler)

/*app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');
  next();
})*/


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

