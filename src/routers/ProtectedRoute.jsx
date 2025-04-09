import React from 'react'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import { useEffect } from 'react';
const ProtectedRoute = ({role, layout, redirectTo="/401"}) => {    //401 Unauthorized  403 Forbidden  404 Not Found
  const [loading ,setLoading] = React.useState(false)
  const[authorised, setAuthorised] = React.useState(true);

   useEffect(() => {
    const checkRole = async ()=>{
      try {
        setLoading(true);
        await axios.get('/api/checkRole', {
          withCredentials: true,                         // check token using withCredentials
        })
        setAuthorised(true);
      }
      catch (error) {
        console.log("Something went wrong", error)
      }
      finally { 
        setLoading(false);
      }
    }
    checkRole();
   },[role])

   if(loading) {
    return <div className='flex justify-center items-center h-screen'>
      <p className='text-lg font-medium'>Loading...</p>
    </div>
   }
   if(!authorised) {
    return <Navigate to={redirectTo} />;
   }
   return layout; // Render the protected component if the user is authorized
  
   
}

export default ProtectedRoute