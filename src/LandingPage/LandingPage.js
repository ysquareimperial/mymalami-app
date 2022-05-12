import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function LandingPage() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>LandingPage</h1>
      <button onClick={()=>navigate('/sign-in')}>get started</button>
    </div>
  )
}
