import React from 'react'
export default function Student({studentRecord, deleteRecord}) {
  return (
    <div>
      {studentRecord.name} {studentRecord.matricule} <label htmlFor='attendance'><input type="checkbox" readOnly checked={studentRecord.present}/>Present</label>  <button onClick={() => deleteRecord(studentRecord.id)}>X</button></div>
  )
}
