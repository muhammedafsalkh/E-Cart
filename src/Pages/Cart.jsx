import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removFromCart } from '../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  const cartArray = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()
  const getCartTotal =()=>{
    if (cartArray.length>0) {
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }

  const handleCart = ()=>{
    dispatch(emptyCart())
    alert("Order successfully Placed... Thank you for purchasing with us!!!")
    navigate('/')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div style={{marginTop:"100px"}}>
      {
        cartArray.length>0?
        <div className='row mt-5'>
          <div className='col-lg-8'>
            <table className='table shadow border'>
              <tr>
                <th>#</th>
                <th>product name</th>
                <th>image</th>
                <th>price</th>
                <th>delete</th>
              </tr>
              <thead>
                <tbody>
                  {
                   cartArray.map((product,index)=>(
                    <tr key={index}>
                       <td>{index+1}</td>
                       <td>{product.title}</td>
                       <td><img src={product.thumbnail} alt="" /></td>
                       <td>${product.price}</td>
                       <td><button onClick={()=>dispatch(removFromCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                    </tr>
                   )) 
                  }
                </tbody>

              </thead>
            </table>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-3'>
            <h1>Cart Summary</h1>
            <div className='border mt-3 p-3 rounded shadow'>
              <h4 className='mt-3'>Total Products: <span>{cartArray.length}</span></h4>
              <h4>Total : <span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
              <div className='d-grid mt-5'>
                <button onClick={handleCart} className='btn btn-success mt-5 rounded'>Check out</button>
              </div>
            </div>
          </div>
        </div>:
        <div style={{height:"60vh",}} className='w-100 d-flex flex column justify-content-center align-items-center'>
        <img height={'250px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-cUxSQrI2qa-acl42wSU87fW6gxXyK4bUw&usqp=CAU" alt="" />
        <h3 className='fw-bolder text-primary'>Your Wishlist is Empty</h3>
        <Link style={{textDecoration:"none"}} className='btn btn-success rounded mt-3' to={'/'}>Back to Home</Link>
      </div>
      }
    </div>
  )
}

export default Cart