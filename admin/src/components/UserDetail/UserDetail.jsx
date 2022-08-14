import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import API from "../../api/apiConfig"
import './userdetail.scss'
import Button from '../Button/Button'
import ModalUser from '../Modal/ModalUser'
const UserDetail = () => {
  let {id} = useParams();
  const [user,setUser] = useState({});
  const [open,setOpen] = useState(false)
  const getAnUser = ()=>{
    API.get(`api/user/${id}`)
    .then((res)=>{
      const newUser = res.data;
      setUser(newUser)
    })
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(()=>{
    getAnUser();
  },[])
  
  return (
    <section className='c-UserDetail' key={user._id} >
  
      <div className='c-UserDetail__content'>
      <h1 className="title"> Chi Tiết User</h1>
      <h2>FullName:<span>{user.fullname}</span></h2>
      <p>Age: <span>{user.age}</span></p>
      <p>Email: <span>{user.email}</span></p>
      <p>Username: <span>{user.username}</span></p>
      <p>Ngày tạo: {user.createdAt}</p>
    
      <Button name="Xóa Tài Khoản" className="btn btn--red"  onClick={handleClickOpen}/>
      { open && <ModalUser
        open={open}
        setOpen={setOpen}
        id={user._id}
        
        
        />
      }
      </div>
    <div className='c-UserDetail__img'>
    <img src={user.img} alt="no result" width="100%" height="100%"/>
    </div>
    
    </section>
  )
}

export default UserDetail