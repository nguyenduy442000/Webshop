import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import API from '../../api/apiConfig'
import { deleteUser } from '../../redux/apiRequest';
import {useSelector,useDispatch} from 'react-redux'
const ModalUser = (props) => {
    const {open, setOpen, id} = props;
    const user = useSelector((state)=>state.auth.login?.currentUser);
    const msg = useSelector((state)=>state.users?.msg)
    const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteuser =()=>{
      deleteUser(user?.accessToken,dispatch,id)
  }
  
  return (
    <div>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
    <h1>Bạn có chắc chắn xóa tài khoản này không ?</h1>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <h1>Tài Khoản sẽ không thể khôi phục . </h1>
          <p style={{fontSize:"2rem"}}>{msg}</p>        
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Quay Lại</Button>
      <Button onClick={handleDeleteuser} autoFocus>
        Đồng Ý
      </Button>
    </DialogActions>
  </Dialog>
    
    </div>
  )
}

export default ModalUser