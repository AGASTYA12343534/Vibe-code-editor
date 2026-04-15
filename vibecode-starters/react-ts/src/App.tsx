import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>⚡ VibeCode React Starter</h1>
      <p>Edit <code>src/App.tsx</code> and save to see changes.</p>
      <button onClick={() => setCount(c => c + 1)} style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>
        Count: {count}
      </button>
    </div>
  )
}

export default App
