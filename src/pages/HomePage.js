import React from 'react'
import {Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/use-auth';
import { removeUser} from 'store/slices/userSlice';
const HomePage = () => {
  const dispatch = useDispatch();
  let {isAuth,email} = useAuth();
  return isAuth ? ( 
    <div>
      <h1>Welcome</h1>
      <button
      onClick={()=>{dispatch(removeUser())
      }}
      >Log out from {email}</button>
    </div>
  ):
  (
    <Navigate to="/login" replace={true}/>
  )
}

export default HomePage