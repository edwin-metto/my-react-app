import React from 'react'

function App() {
    const [count, setCount] =(0);
  return (
    <div>
        <h1>my name is Edwin</h1>
        <h2>Counter:{count}</h2>
        <button onClick={() =>
            setCount(count + 1)
        }>increment counter</button>

    </div>
  )
}

export default App