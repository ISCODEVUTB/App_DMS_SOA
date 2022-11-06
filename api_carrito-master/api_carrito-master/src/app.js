import express from 'express'
import carritoRoutes from "./routes/carrito.routes.js";

const app = express()

app.use(express.json())

app.use(carritoRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint Not Found'
    })
})

export default app;