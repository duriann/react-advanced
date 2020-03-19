import React from 'react'
import UseWindowWidth from './useWindowWidth/index'

export default function TestCustomHooks(){
  const width = UseWindowWidth()
  return (
      <div>
        <span>{width}</span>
      </div>
  )
}