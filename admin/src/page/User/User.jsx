import  React,{useState,useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../../components/Button/Button'
import './user.scss';
import {getAllUsers} from '../../redux/apiRequest';
import {useSelector,useDispatch} from 'react-redux'

const User = () => {
    const user = useSelector((state)=>state.auth.login?.currentUser);
    const userList = useSelector((state)=>state.users.users?.allUsers)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
      if(!user){
        navigate("/login")
      }
      if(user?.accessToken){
        getAllUsers(user.accessToken, dispatch);

      }
    
    },[])

  return (
    <div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650  }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><h1>FullName</h1></TableCell>
          <TableCell align="center"><h1>Image</h1></TableCell>
          <TableCell align="center"><h1>Age</h1></TableCell>
          <TableCell align="center"><h1>Email</h1></TableCell>
          <TableCell align="center"><h1>Username</h1></TableCell>
          <TableCell align="center"><h1>Detail</h1></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {/* tên dấu chấm hỏi optional chainging */}
        {userList?.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            <p className="text">{row.fullname}</p>  
            </TableCell>
            <TableCell align="center"><img src={row.img} alt="no result" width="100px" height="100px"/></TableCell>
            <TableCell align="center"><p className="text" >{row.age}</p></TableCell>
            <TableCell align="center"><p className="text"> {row.email}</p></TableCell>
            <TableCell align="center"> <p className="text">{row.username}</p></TableCell>
            <TableCell align="center">
         <Link to={`/api/user/${row._id}`}> <Button name="Chi Tiết"   className="btn btn--green"/></Link>
           
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default User