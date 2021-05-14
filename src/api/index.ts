import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.json('Welcome to another api world')
})

export default router
