import { ConnectionOptions } from 'typeorm'
import 'dotenv/config'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

const ormConfig: ConnectionOptions = {
  namingStrategy: new SnakeNamingStrategy(),

  type: 'postgres',
  url: process.env.DATABASE_URL,

  // use .ts in development, compiled .js in production
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
}

export = ormConfig
