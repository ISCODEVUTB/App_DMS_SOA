import express from 'express'
import endpoints from "./routes/endpoints.routes.js";

const app = express()

app.use(express.json())

app.use(endpoints)


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint Not Found'
    })
})

export default app;