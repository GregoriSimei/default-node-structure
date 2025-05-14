import dotenv from 'dotenv'
dotenv.config()

import { exec } from 'child_process'
import path from 'path';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Usage: yarn typeorm:migration <migration_name>");
  process.exit(1);
}


const migrationName = args[0];

const basePath = path.join('src', 'infra', 'persistence', 'typeorm')
const migrationNamePath = path.join(basePath, 'migrations', migrationName)
const typeOrmConnectionPath = path.join(basePath, 'typeorm-connection.ts')
const command = `ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate ${migrationNamePath} -d ${typeOrmConnectionPath}`;

console.info(`Exec command:`, command)

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Migration error: ${stderr}`);
    process.exit(1);
  } else {
    console.log(`Migration success: ${stdout}`);
  }
});