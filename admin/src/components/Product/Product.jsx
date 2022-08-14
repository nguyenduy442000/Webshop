import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import API from "../../api/apiConfig";
import "./product.scss";
import Button from "../Button/Button";
import { ModalDelete, ModalAdd, ModalEdit } from "../Modal/Modal";
import {Link} from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState();
  const [open, setOpen] = React.useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalAdd, setopenModalAdd] = React.useState(false);
  const [id, setId] = useState();
  const [product,setProduct]=useState({})
  const [search,setSearch]=useState("")

  
  const handleClickDelete = (row) => {
    setOpen(true);
    setId(row._id);
  };
  const handleClickModalAdd = () => {
    setopenModalAdd(true);
  };
  const handleClickModalEdit = (row) => {
    setOpenModalEdit(true);
    setProduct(row)
  };

  // function getALLProduct
  const getALLProduct =() =>{
    API.get(`api/product`)
    .then((res) => {
      const product = res.data;
      setProducts(product);
    });
  }
  useEffect(()  => {
    getALLProduct();
  }, []);

  const handleSearch= ()=>{
    const newSearch = products.filter((item) =>(item.title.toLowerCase().includes(search))
      
    )

  if(search.length===0 ){
    getALLProduct();
  }else if(search.length>0 && newSearch.length===0){
    alert("Không tìm thấy tên sản phẩm !")
  }else{
    setProducts(newSearch)
  }
 
  }

    
  return (
    <section className="c-Product">
    <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
    <div className="c-header__search">
         <input type="text" placeholder="Tìm kiếm sản phẩm theo tên" className="c-Product__input" onChange={(e)=>setSearch(e.target.value)}/>
            <div className="c-Product__icon" onClick={handleSearch} >
            <FaSearch  /></div>
          </div>
      <Button
        name="Thêm"
        className="btn btn--blue"
        onClick={handleClickModalAdd}
      />
    </div>
    
      {/*ModalAdd */}
      <ModalAdd open={openModalAdd} setOpen={setopenModalAdd}  getALLProduct={ getALLProduct}/>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h1 className="c-Product__title">Tên</h1>
              </TableCell>
              <TableCell align="center">
                <h1 className="c-Product__title">Loại</h1>
              </TableCell>
              <TableCell align="center">
                <h1 className="c-Product__title">Giá</h1>
              </TableCell>
              <TableCell align="center">
                <h1 className="c-Product__title">Ngày Nhập Hàng</h1>
              </TableCell>
              <TableCell align="center">
                <h1 className="c-Product__title">Số lượng</h1>
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* */}
            {products.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span className="c-Product__text">{row.title}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="c-Product__text">{row.categories}</span>{" "}
                </TableCell>
                <TableCell align="center">
                  <span className="c-Product__text"> ${row.price}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="c-Product__text">{row.createdAt}</span>{" "}
                </TableCell>
                <TableCell align="center">
                  <span className="c-Product__text">
                    {row.inStock ? "còn hàng" : "hết hàng"}
                  </span>{" "}
                </TableCell>
                <TableCell align="center">
                  <div className="c-Product__detail">
                    <Button
                      name="Xóa"
                      className="btn btn--red"
                      onClick={() => handleClickDelete(row)}
                    />
                    {/*ModalDelete */}
                    <ModalDelete
                      open={open}
                      setOpen={setOpen}
                      id={id}
                      setProducts={setProducts}
                      products={products}
                      getALLProduct={ getALLProduct}
                    />
                    
                    <Button
                    name="Sửa"
                    className="btn btn--black"
                    onClick={() => handleClickModalEdit(row)}
                  />
                  {openModalEdit &&  <ModalEdit
                    openModalEdit={openModalEdit}
                    setOpenModalEdit={setOpenModalEdit}
                    currentproduct= {product}
                    getALLProduct={ getALLProduct}
                

                  />}
                   
                    <Link to={`/api/product/${row._id}`}  style={{ textDecoration: "none", color: "black" }}>
                    <Button name="Chi Tiết" className="btn btn--green" />
                    </Link>
                    
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Product;
