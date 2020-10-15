import React from 'react'
import { signRequest } from 'redux/actions'
import { useDispatch } from 'react-redux'

const LandingPage = () => {
  const dispatch = useDispatch()
  return (
    <div>
      Welcome to the Landing Page
      <button onClick={() => dispatch(signRequest())}>CLICK ME</button>
    </div>
  )
}

export default LandingPage
