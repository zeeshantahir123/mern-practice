import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowStudent = () => {
    const [data, setData]=useState([])
    let [editedData, setEditedData]=useState({name:"", email:""})
    let [isediting, setIsEditing]=useState(null)
    let fetchData=()=>{
      axios.get('/get-data').then((resp)=>{
        setData(resp.data);
     })
    }
    useEffect(()=>{
      fetchData()
    }, [])
    let editvalueFunc=(item)=>{
        setIsEditing(item._id)
        setEditedData({name:item.name, email:item.email})
    }
    let saveUpdatedData=async (id)=>{
       try{
         await axios.put(`/update-data/${id}`, editedData)
        setIsEditing(null)
        fetchData()
       }
       catch(err){
        console.log(err);
        
       }
    }
    let deleteData=async (id)=>{
     try{
       await axios.delete(`/delete-data/${id}`)
       fetchData()
     }
     catch(err){
      console.log(err);
     }
    }
  return (
    <div>
      <table border="1" cellSpacing="0"> 
            {
                data.map((item)=>(
                    <tr>
                        <td>
                          {
                            isediting===item._id?
                            <input
                            type='text'
                            value={editedData.name}
                            onChange={(e)=>setEditedData({...editedData, name:e.target.value})}
                            />:
                            (item.name)
                          }
                        </td>
                        <td>
                        {
                            isediting===item._id?
                            <input
                            type='email'
                            value={editedData.email}
                            onChange={(e)=>setEditedData({...editedData, email:e.target.value})}
                            />:
                            (item.email)
                          }
                        </td>
                       {
                        isediting===item._id?
                        <>
                         <td><button onClick={()=>saveUpdatedData(item._id)}>Save</button></td>
                         <td><button onClick={()=>setIsEditing(null)}>Cancel</button></td>
                        </>:
                        <>
                         <td><button onClick={()=>editvalueFunc(item)}>Edit</button></td>
                         <td><button onClick={()=>deleteData(item._id)}>Delete</button></td>
                        </>
                       }

                    </tr>
                ))
            }
      </table>
    </div>
  )
}

export default ShowStudent
