import React from 'react'
import Button from './Button'
export default function Header({title}) {
  return (
    <header className='header'>
        <h1>{title}</h1> <Button title="Add Student"/>
    </header>
  )
}
