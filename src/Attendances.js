import React from 'react'
import Student from './Student'
export default function Attendances({attendances, deleteRecord}) {
  if(attendances.length === 0){
    return (<p>No students attended</p>)
  }
  return attendances.map(e => <Student key={e.matricule} studentRecord={e} deleteRecord={deleteRecord} />)
}
