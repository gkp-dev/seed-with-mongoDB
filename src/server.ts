import './config/prelude'
import express from 'express'
import cors from 'cors'
import api from './api/index'

const app = express()

const launchServer = () => {
  //Initialize
  app.use(cors())
  app.use('/api', api)

  //Port
  const port = process.env.PORT || 4300
  app.listen(port, () => {
    console.log(`My app is listening on http://localhost:${port}...`)
  })
}

export default launchServer
