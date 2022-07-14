import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPosts, getPosts } from '../../app/reducers/postCreator';
import { getUsers } from '../../app/reducers/usersSlice';
import Header from '../../components/header/Header';
import Post from './Post';
import './works.css'

const Works = () => {

  const posts = useSelector(state => state.posts.posts)
  const token = useSelector(state => state.users.token)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const [titleValue, setTitleValue] = useState('')
  const [textValue, setTextValue] = useState('')
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState('')
  
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value)
  } 

  const handleTextChange = (e) => {
    setTextValue(e.target.value)
  }

  const handleAddPost = () => {
    setOpen(!open)
  }

  const handleSubmit = () => {
    dispatch(createPosts({image, titleValue, textValue}))
    setImage('')
    setTextValue('')
    setTitleValue('')
    setOpen(false)
  }

  return (
    <div>
      <div style={{
        position: 'fixed',
        width: '100%',
        zIndex: '3',
      }}>
      <Header />
      </div>
      {
        token &&
        <div className='add-post-block'>
        <span onClick={handleAddPost} className='add-post'>Добавить пост</span>
      </div>
      }
      {
        open &&
       <div className='modal-post'>
          <span style={{
            position: 'absolute',
            top: '2%',
            left: '2%',
            color: 'rgba(0, 0, 0, 0.5)',
            cursor: 'pointer'
          }}
            onClick={() => setOpen(false)}
          >закрыть</span>
         <div>
          <div style={{
            width: '50%',
            margin: 'auto'
          }}>
            <h5 style={{
              textAlign: 'center',
              marginTop: '5%'
            }}>выберите фото</h5>
            <input 
              type="file"
              onChange={e => setImage(e.target.files[0])}  
              className='file-input'
              multiple
            />
          </div>
        <div style={{
          width: '80%',
          margin: 'auto',
          marginTop: '5%'
        }}>
          <h5>Введите название</h5>
        <input 
          type="text" 
          placeholder='Название'
          onChange={(e) => handleTitleChange(e)}
          value={titleValue}
          className='title-input'
        />
      </div>
      <div style={{
        width: '80%',
        margin: 'auto',
        marginTop: '5%'
      }}>
        <h5>Введите описание</h5>
        <textarea 
          name="post" 
          id="" 
          cols="50" 
          rows="5"
          onChange={(e) => handleTextChange(e)}
          value={textValue}
          className='text-input'
        ></textarea>
      </div>
      <div>
        <button style={{
          width: '30%',
          display: 'block',
          margin: 'auto',
          marginBottom: '5%',
          border: '0',
          borderRadius: '5px',
          background: "rgb(28, 135, 134)",
          color: '#fff',
          padding: '1%'
        }} onClick={handleSubmit}>Добавить</button>
      </div>
      </div>
       </div>
      
      }
      <div className="container posts-container">
      <div style={{
        marginTop: '2%'
      }}>
        {posts.map(item => {
          return (
            <Post key={item._id} id={item._id} img={item.image} title={item.title} text={item.text}/>
          )
        }).reverse()}
      </div>
      
      </div>
    </div>
  );
};

export default Works;