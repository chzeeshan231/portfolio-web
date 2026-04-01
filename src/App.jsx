import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loader-screen" role="status" aria-live="polite" aria-label="Loading website">
        <div className="loader-core">
          <div className="loader-ring loader-ring-lg" />
          <div className="loader-ring loader-ring-md" />
          <div className="loader-ring loader-ring-sm" />
          <div className="loader-center-glow" />
        </div>
        <h1 className="loader-brand">Lex Cove Creative</h1>
        <p className="loader-subtitle">Crafting cinematic visual experiences...</p>
      </div>
    )
  }

  return (
    <div>
      <Home />
    </div>
  )
}

export default App