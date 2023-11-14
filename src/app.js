import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

import __dirname from './utils.js'
import pokeRouter from './routes/poke.router.js'

//Inicializamos las variables
const app = express()
const mongoURL = 'mongodb+srv://Roman2710:Amoamimami123@clusterroman.kkfusgx.mongodb.net/'
const mongoDBName = 'clase15'

//Para traer info de POST como JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Configurar el motor de la Plantilla
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//Rutas
app.get('/', (req,res) => res.render('index', {}))
app.get('/health', (req, res) => res.send('OK'))
app.use('/pokemon', pokeRouter)

mongoose.connect(mongoURL, {dbName: mongoDBName})
.then(() => {
    console.log('DB connected B)')
    app.listen(8080, () => console.log(`Listening 🏃 ....`))
})
.catch(e => console.log('Error to connected :/'))

