const express = require('express');
const app = express();
const PORT = process.env.PORT || 3111;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '⚡ VibeCode Express Starter',
    status: 'running',
    routes: {
      'GET /': 'This info',
      'GET /api/hello': 'Hello endpoint',
      'POST /api/echo': 'Echo back body'
    }
  });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from VibeCode!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
