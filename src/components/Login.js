import React from 'react'
import Form from './Form'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = (email,password) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user})=>{
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }))
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        })
        .catch(()=>alert('Invalid user'))
    }
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const authUser = JSON.parse(loggedInUser)
          dispatch(setUser({
            email: authUser.email,
            id: authUser.uid,
            token: authUser.accessToken,
        }))
        navigate('/')
        }
      }, []);
  return (
    <div>
        <Form
        title='sign in'
        handleClick={handleLogin}
        />

    </div>
  )
}

export default Login