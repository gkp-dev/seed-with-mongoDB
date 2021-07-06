import fs from 'fs'
import path from 'path'

const checkEnv = () => {
  const envPath = path.join(process.cwd(), '.env')
  if (!fs.existsSync(envPath)) throw new Error('There is no .env file')

  const envFile = fs.readFileSync(envPath, { encoding: 'utf-8' })
  if (!envFile.includes('MONGODB_URL'))
    throw new Error('Your env file does not contain the MONGODB_URL')
}

export default checkEnv
