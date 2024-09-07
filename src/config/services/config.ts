import { Express, json } from 'express'
import rateLimit from 'express-rate-limit'
import cors from 'cors'

export async function setupServerConfig(app: Express): Promise<void> {
    app.use(json())
    app.use(cors())
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: { message: "too many requests, please try again later" },
    }))
}