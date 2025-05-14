import dotenv from 'dotenv'
dotenv.config()

import { exec } from 'child_process'

const command = "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d ./src/infra/persistence/typeorm/typeorm-connection.ts"

exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Migration error: ${stderr}`);
      process.exit(1);
    } else {
      console.log(`Migration success: ${stdout}`);
    }
});