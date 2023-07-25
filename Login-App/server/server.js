import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config({ path: "./config.env" })
import connectDb from './Database/connection.js'
import router from './routes/route.js'


const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'));
app.disable('x-powered-by');

const url = "mongodb://127.0.0.1:27017";
connectDb(url)

const port = 8000;

//HTTP GET Request
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
})

app.use('/api', router) //every route starts with /api

app.listen(port, (res, req) => {
    console.log(`Server is running on ${port}`)
})