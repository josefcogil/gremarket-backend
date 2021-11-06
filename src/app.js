import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import knex from 'knex'
import { Model } from 'objection'
import * as dbConfig from './database/config'
import { routesList } from './routes'

// load env vars from .env file
dotenv.config()

// setup database connection
const db = knex(
    process.env.ENV == 'development'
        ? dbConfig.development
        : dbConfig.production
)
Model.knex(db)

const app = express()

app.enable('trust proxy');

// app middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

// set routes
routesList.forEach(route => {
    app.use(`/${route}`, require(`./routes/${route}`).router);
});

// start server
app.listen(
    process.env.PORT,
    process.env.ENV == 'development'
        ? console.log(`Server running on port ${process.env.PORT}`)
        : null
)