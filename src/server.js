const express = require('express')
const ejs = require('ejs')
const path = require('path')
const cookieParser = require('cookie-parser')
const { PORT } = require('./config.js')
const authMiddleWare = require('./middleware/auth.js')
const app = express()

// setting template engine
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

// third-party and build-in middlewares
app.use( express.static(path.join(__dirname, 'public')) )
app.use( express.urlencoded({extended:true}) )
app.use( cookieParser() )
app.use( authMiddleWare )

// load modules
const modules = require('./modules/index.js')

app.use( modules )


app.listen(PORT, () => console.log('http://localhost:' + PORT))