import './App.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
function AddStudents() {
  let reference=useRef()
  const [data, setData]=useState({
    name:"",
    email:""
  })
  useEffect(() => {
   if(data.name && data.email){
    axios.post('/student-data', data)
    .then((resp) => {
      console.log('Response:', resp);
    })
    .catch((error) => {
      console.error('There was an error!', error.response || error.message);
    });
   }
  }, [data])
  let submitForm=(e)=>{
    e.preventDefault()
    let formValue={
      name:reference.current.name.value,
      email:reference.current.email.value
    }
    setData(formValue)
  }

  
  
  return (
    <div className="App">
      <h2>Hello </h2>
      <form action="" onSubmit={submitForm} ref={reference}>
        <input type="text" name='name' />
        <input type="email" name='email' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddStudents;
