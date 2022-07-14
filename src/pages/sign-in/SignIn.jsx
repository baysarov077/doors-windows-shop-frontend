import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../app/reducers/usersSlice';
import './signIn.css'


const SignIn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const token = useSelector(state => state.users.token)
  const handleLogin = (e) => {
    setLogin(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(auth({ login, password }))
    setLogin('')
    setPassword('')
  }

  React.useEffect(()=> {
    if(token) {
      navigate('/works')
    }
  }, [token])

  return (
    <>
      <div className='login-block'>
        <div className='inputs-block'>
          <input 
            type="text" 
            placeholder='Введите логин'
            onChange={(e) => handleLogin(e)}
            value={login}
          />
          <input 
            type="password"
            placeholder='Введите пароль'
            onChange={(e) => handlePassword(e)}
            value={password}
          />
          <div>
          <button
            onClick={() => handleSubmit()}
            className='submit-btn'
          >
            Войти
          </button>
        </div>
        </div>
      </div>
    </>  
  );
};

export default SignIn;