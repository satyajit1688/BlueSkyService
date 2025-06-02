import express from 'express'

export const routes = express.Router()

routes.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})
