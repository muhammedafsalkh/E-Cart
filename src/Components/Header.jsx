import React from 'react'
import { Link } from 'react-router-dom'
import { Nav,Navbar,Container, Badge,} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:"none",color:"white",fontWeight:"bold"}}><i className='fa-solid fa-truck-fast me-2'></i></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded'>
            <Link style={{color:"white",textDecoration:"none"}} to={'/wishlist'} state={{textDecoration:"none",color:"white",fontWeight:"bold"}}> <i className='fa-solid fa-heart text-danger me-2'></i>Wishlist
            <Badge className='ms-2 rounded bg-light'>{wishlist.length}</Badge>
            </Link>
            </Nav.Link>

          <Nav.Link className='btn border rounded'>
            <Link style={{color:"white",textDecoration:"none"}} to={'/cart'} state={{textDecoration:"none",color:"white",fontWeight:"bold"}}> <i className='fa-solid fa-cart-plus text-danger fa-1x'></i>Cart
            <Badge className='ms-2 rounded bg-light'>{cart.length}</Badge>
            </Link>
            </Nav.Link>
          
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header