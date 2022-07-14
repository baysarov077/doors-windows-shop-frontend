// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import './admin.css'

// const Admin = () => {

//   const navigate = useNavigate()

//   const dispatch = useDispatch()



//   const [login, setLogin] = useState('')
//   const [password, setPassword] = useState('')



//   return (
//     <div className='sign-in-block'>     
//        <div className='flex-block'>
//        <input
//         placeholder='Введите логин'
//         type="text"
//         onChange={(e) => setLogin(e.target.value)}
//         value={login}
//        />  
//         <input 
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           placeholder='Введите пароль'
//           style={{
//             marginTop: '5%'
//         }} 
//           type="password" 
//         />
//        </div>
//       <div>
//         <button onClick={''} className='sign-in-btn'>ВОЙТИ</button>
//       </div>
//     </div>
//   );
// };

// export default Admin;