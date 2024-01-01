import express from 'express'
import cors from 'cors'
import routes from './routes'
import Errorhandler from './middleware/Errorhandler'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/', routes)
app.use(Errorhandler)

app.listen(PORT, () => {
    console.log('Listening on http://localhost:'+PORT)
})