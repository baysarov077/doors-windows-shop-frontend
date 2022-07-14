import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePosts } from '../../app/reducers/postCreator';
import './Post.css'
import {FaTrashAlt} from 'react-icons/fa'

const Post = ({img, title, text, id}) => {

  const token = useSelector(state => state.users.token)

  const [open, setOpen] = useState(false)

  const [del, setDel] = useState(false)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deletePosts(id))
  }

  const dots = '...'
  
  return (
    <div className='post-card'>
      <div className='post-contant'>
      {
        token && 
      <div>
        <button className='del-btn' onClick={() => setDel(!del)}><FaTrashAlt /></button>
      </div>
      }
      {del &&
        <div className='accept-del'>
          <span>Вы действительно хотите удалить?</span>
          <div style={{
            marginTop: '5%',
            width: '80%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <button style={{
              width: '45px',
              background: 'rgb(28, 135, 134)',
              border: '0',
              borderRadius: '5px',
              color: '#fff'
            }} onClick={() => handleDelete(id)}>ДА</button>
            <button style={{
               width: '45px',
              background: 'rgb(28, 135, 134)',
              border: '0',
              borderRadius: '5px',
              color: '#fff'
            }} onClick={() => setDel(false)}>НЕТ</button>
          </div>
        </div>
      }
      <div className='post-img-block'>
        <img width={'100%'} height={'300px'} className='post-img' src={`http://localhost:4000/${img}`} alt="none" />
      </div>
        <div className='post-text-block'>
          <h4 className='post-title'>{title}</h4> 
          <p className='post-text'>{text.length > 350 ? text.substring(0, 350) + dots : text}</p>
          {text.split(' ').length > 51 && 
            <button className='read-all' onClick={() => setOpen(!open)}>Читать полностью</button>
          }
          {
            open &&
            <div className='text-modal'>
              <span className='close-text-modal'>закрыть</span>
              <p className='full-text'>
                {text}
              </p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Post;