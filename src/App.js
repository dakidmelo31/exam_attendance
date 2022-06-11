import { useState } from 'react'
import Header from './Header'
import Attendances from './Attendances';
import AddAttendance from './AddAttendance';
function App() {
  const records = [
    {
    id:1,
    name: "Philip",
    matricule: "CT111",
    present: false,
  },
    {
    id:2,
    name: "Ndula",
    matricule: "CT112",
    present: false,
  },
    {
    id:3,
    name: "Ndoye",
    matricule: "CT113",
    present: false,
  },
]
const [attendances, setAttendances] = useState(records)
const deleteRecord = (id) =>{
  console.log("deleting")
  setAttendances(attendances.filter((record) => record.id !== id))

}
const toggleRecord = (id) =>{

}
  return (
    <>
      <Header title="Course Attendance Record"  />
      <AddAttendance />
      <Attendances attendances={attendances} deleteRecord={deleteRecord}/>
    </>
  );
}

export default App;
