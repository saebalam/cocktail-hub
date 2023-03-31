import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Error = () => {
  const nav = useNavigate()

  setTimeout(()=>{
    nav('/')
  },2000)

  return (
    <div style={{marginTop:'100px'}}>
      <h2 style={{textAlign:'center'}}>{`Oops :(  You are on wrong page`}</h2>
    </div>
  )
}

export default Error
