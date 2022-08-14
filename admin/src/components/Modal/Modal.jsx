import React, {useState,useEffect} from 'react'
import Input from '../Input/Input'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import API from '../../api/apiConfig'
import './modal.scss'


export const  ModalDelete=(props)=> {
    const {open, setOpen, id , getALLProduct}=props;
   
    const handleClose = () => {
        setOpen(false);
      };
    const handleDelete=()=>{
      API.delete(`api/product/${id}`)
      .then(res=>{
        alert('susscess')
        getALLProduct();
      })
      .catch(err=>{console.log(err)})
        setOpen(false);

        
    }
     
      
  return (
    <div  className='c-Modal'>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    BackdropProps={{ invisible: true }}
    PaperProps={{
        elevation: 0,
        sx: {
          border: 'none',
          width:'900px',
          height:'200px'
          
        }
      }}
  
  >
    <DialogTitle id="alert-dialog-title">
      <h2>Bạn có chắc chắc muốn Xóa sản phẩm này không ?</h2>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <h2>Bạn không thể khôi phục lại được sản phẩm sau khi Xóa</h2>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}><h3>Quay Lại</h3></Button>
      <Button onClick={handleDelete} autoFocus >
      <span>  Đồng Ý</span>
      </Button>
    </DialogActions>
  </Dialog>
    </div>
    
  )
}

//  Add product
export const  ModalAdd=(props)=> {
    const {open, setOpen ,getALLProduct}=props;
    const [item,setItem] = useState({
        title:'',
        desc:'',
        firstimg:'',
        secondimg:'',
        categories:'',
        price:'',
        color:''
    })
    const handleClose = () => {
        setOpen(false);
      };
    
    //change Input 
     const handleOnchangeInput = (event,id)=>{
      let copyItem = {...item}
      copyItem[id]= event.target.value;
      setItem({
        ...copyItem
      })
     
       
     }
     // add
     const handleAddProduct = (item)=>{
       API.post(`/api/product`,item)
       .then(res=>{
      
         getALLProduct();
       })
       .catch(err=>{console.log(err)})
        setOpen(false);
     }
  return (
    <div  className='c-Modal'>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    BackdropProps={{ invisible: true }}
    PaperProps={{
        elevation: 0,
        sx: {
          border: 'none',
          width:'900px'
        
          
        }
      }}
  
  >
    <DialogTitle id="alert-dialog-title">
     <span>Thêm Sản Phẩm</span>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
       <Input type="text" name="Title"  onChange={(event)=>{handleOnchangeInput(event,"title")}}/>
       <Input type="text" name="Desc"    onChange={(event)=>{handleOnchangeInput(event,"desc")}}/>
       <Input type="text" name="Firstimg"  onChange={(event)=>{handleOnchangeInput(event,"firstimg")}}/>
       <Input type="text" name="Secondimg"  onChange={(event)=>{handleOnchangeInput(event,"secondimg")}}/>
       <Input type="text" name="Categories"  onChange={(event)=>{handleOnchangeInput(event,"categories")}}/>
       <Input type="text" name="Price"  onChange={(event)=>{handleOnchangeInput(event,"price")}}/>
       <Input type="text" name="Color"  onChange={(event)=>{handleOnchangeInput(event,"color")}}/>


      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}><span>Quay Lại</span></Button>
      <Button onClick={()=>{handleAddProduct(item)}} autoFocus>
       <span> Đồng Ý</span>
      </Button>
    </DialogActions>
  </Dialog>
    </div>
    
  )
}


// Edit Product 
export const  ModalEdit=(props)=> {
    const {openModalEdit, setOpenModalEdit ,currentproduct, getALLProduct}=props;
  

    const [item,setItem] = useState({
        id:currentproduct._id,
        title: currentproduct.title,
        desc:currentproduct.desc,
        firstimg:currentproduct.firstimg,
        secondimg:currentproduct.secondimg,
        categories:currentproduct.categories,
        price:currentproduct.price,
        color:currentproduct.color
    })
   
    const handleClose = () => {
        setOpenModalEdit(false);
      };
    
    //change Input 
     const handleOnchangeInput = (event,id)=>{
        let copyProduct = {...item}
         copyProduct[id]= event.target.value;

      setItem({
          ...copyProduct
        })
       
     }
     // edit
     const handleEditProduct = (item)=>{
        API.put(`api/product/${item.id}`,item)
        .then(res=> {
          alert('update susscess!')
          getALLProduct();
        })

       setOpenModalEdit(false);

     }

    
  
    
  return (
    <div  className='c-Modal'>
    <Dialog
    open={openModalEdit}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    BackdropProps={{ invisible: true }}
    PaperProps={{
        elevation: 0,
        sx: {
          border: 'none',
          width:'900px'
        
          
        }
      }}
  
  >
    <DialogTitle id="alert-dialog-title">
     <span>Sửa Sản Phẩm</span>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        
       <Input type="text" name="Title" value={item.title}  onChange={(event)=>{handleOnchangeInput(event,"title")}}/>
       <Input type="text" name="Desc" value={item.desc}  onChange={(event)=>{handleOnchangeInput(event,"desc")}}/>
       <img src={item.firstimg} alt="no results" style={{width:"90px" ,height:"90px"}}/>
       <Input type="text" name="Firstimg" value={item.firstimg} onChange={(event)=>{handleOnchangeInput(event,"firstimg")}}/>
       <img src={item.secondimg} alt="no results" style={{width:"90px" ,height:"90px"}}/>
       <Input type="text" name="Secondimg"  value={item.secondimg} onChange={(event)=>{handleOnchangeInput(event,"secondimg")}}/>
       <Input type="text" name="Categories" value={item.categories}  onChange={(event)=>{handleOnchangeInput(event,"categories")}}/>
       <Input type="text" name="Price"  value={item.price} onChange={(event)=>{handleOnchangeInput(event,"price")}}/>
       <Input type="text" name="color"  value={item.color} onChange={(event)=>{handleOnchangeInput(event,"color")}}/>
     
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}><span>Quay Lại</span></Button>
      <Button onClick={()=>{handleEditProduct(item )}} autoFocus>
       <span> Đồng Ý</span>
      </Button>
    </DialogActions>
  </Dialog>
    </div>
    
  )
}
