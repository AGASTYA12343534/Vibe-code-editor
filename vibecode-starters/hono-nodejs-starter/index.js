import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: '⚡ VibeCode Hono Starter',
    status: 'running',
    routes: {
      'GET /': 'This info',
      'GET /api/hello': 'Hello endpoint',
      'POST /api/echo': 'Echo back body'
    }
  })
})

app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hono on VibeCode!' })
})

app.post('/api/echo', async (c) => {
  const body = await c.req.json()
  return c.json({ received: body })
})

const port = 3111
console.log(`Server running at http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
