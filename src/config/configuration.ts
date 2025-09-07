import { envSchema } from './env'

export default () => envSchema.parse(process.env)
