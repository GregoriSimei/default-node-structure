
import 'reflect-metadata'

import recursiveReadDir from 'recursive-readdir'
import { join } from 'path'

function setupContainers(): void {
    recursiveReadDir(join(__dirname, '../containers'), (_: any, files: any) => {
        for (const file of files) {
            if (!file.endsWith('.map')) {
                ; (import(`${file}`))
            }
        }
    })
}

setupContainers()