import express from 'express'
import endpoints from "./routes/endpoints.routes.js";
import cors from "cors";
const app = express()

app.use(express.json())
app.use(cors());
app.use(endpoints)


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint Not Found'
    })
})

export default app;