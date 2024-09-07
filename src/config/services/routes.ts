
import { Express, Router } from 'express'
import { join } from 'path'
import recursiveReaddir from 'recursive-readdir'
import { envApp } from '../variables/app'

export async function setupRoutes(app: Express): Promise<void> {
  const router = Router()
  app.use(`/${envApp.name}`, router)

  recursiveReaddir(join(__dirname, '/../../infra/http/routes'), async (_: any, files: any) => {
    for (const file of files) {
      if (!file.endsWith('.map')) {
        ; (await import(`${file}`)).default(router)
      }
    }
  })
}