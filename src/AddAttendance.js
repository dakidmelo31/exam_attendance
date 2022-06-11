import React from 'react'
import { useState } from 'react'

export default function AddAttendance() {
    const [name, setName] = useState('')
    const [matricule, setMatricule] = useState('')
    const [present, setPresent] = useState('')
    const [id, setId] = useState(false)
  return (
    <form className='addForm'>
        <div className='form-control'>
            <label>Attendance</label>
            <input type='text' placeholder="Name of student..." value={name} onChange={(e) =>{setName(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label>Matricule</label>
            <input type='text' placeholder="Matricule of student..." value={matricule} onChange={(e) =>{setMatricule(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label>Present</label>
            <input type='checkbox' value={present} onChange={(e) =>{setPresent(e.currentTarget.checked)}}/>
        </div>
        <div className='form-control'>
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}
