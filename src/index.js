const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const routes = require('./routes')
const methodOverride = require('method-override')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

// Method override
app.use(methodOverride('_method'))

// Connect db
const db = require('./config/db')
db.connect()

// Middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// File static
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

// Routes init
routes(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})