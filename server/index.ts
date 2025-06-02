import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { db } from './db'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Register routes
app.use('/api', routes)

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})