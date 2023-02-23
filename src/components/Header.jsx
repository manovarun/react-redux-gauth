import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';
import { googleLogout } from '@react-oauth/google';
import { authReset } from '../features/AuthSlice';

const Header = () => {
  const { user } = useSelector(({ Auth }) => Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    googleLogout();
    dispatch(authReset());
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    // <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
    //   <Container>
    //     <LinkContainer to='/'>
    //       <Navbar.Brand>React App</Navbar.Brand>
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls='navbarScroll' />
    //     <Navbar.Collapse id='navbarScroll'>
    //       <Nav className='me-auto'>
    //         {user && (
    //           <>
    //             <LinkContainer to='/'>
    //               <Nav.Link className='nav-item'>Home</Nav.Link>
    //             </LinkContainer>
    //             <LinkContainer to='/about'>
    //               <Nav.Link className='nav-item'>About</Nav.Link>
    //             </LinkContainer>
    //             <NavDropdown title={user.name} id='username'>
    //               <NavDropdown.Item
    //                 onClick={logoutHandler}
    //                 className='text-danger'
    //               >
    //                 <IoMdLogOut /> Logout
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //           </>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar bg='primary' variant='dark' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>React App</Navbar.Brand>
        </LinkContainer>
        {user && <Navbar.Toggle aria-controls='navbarScroll' />}
        <Navbar.Collapse id='navbarScroll'>
          {user && (
            <Nav className='ms-auto'>
              <LinkContainer to='/'>
                <Nav.Link className='nav-item'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link className='nav-item'>About</Nav.Link>
              </LinkContainer>

              <NavDropdown title={user.name} id='username'>
                <NavDropdown.Item
                  onClick={logoutHandler}
                  className='text-danger'
                >
                  <IoMdLogOut /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
