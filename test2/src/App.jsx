import { useState } from 'react'
import './index.css'

function App() {
  const [count, set] = useState(0)

  const addvalue = () => {
    set(count + 1)
  }

  const subvalue = () => {
    set(count - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Counter Project</h1>
        <div className="flex items-center justify-center my-8">
          <span className="text-6xl font-bold text-indigo-600">{count}</span>
        </div>
        <div className="flex flex-col gap-3">
          <button 
            onClick={addvalue}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Increment
          </button>
          <button 
            onClick={subvalue}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
