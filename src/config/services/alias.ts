import * as path from 'path'
import moduleAlias from 'module-alias'

const dir = path.resolve(__dirname, '../../')

moduleAlias.addAliases({
    '@config': path.resolve(dir, 'config'),
    '@application': path.resolve(dir, 'application'),
    '@domain': path.resolve(dir, 'domain'),
    '@infra': path.resolve(dir, 'infra'),
    '@vars': path.resolve(dir, 'config/variables'),
})