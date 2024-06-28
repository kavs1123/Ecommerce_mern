import express from 'express'

const router = express.Router()

router.post('/register', registerControl)


export default router