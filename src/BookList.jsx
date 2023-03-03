import React, { useContext, useEffect, useState } from 'react'
import {Table} from "react-bootstrap"
import Axios from "axios"
import { Api } from './Api'
import "./index.css"
import { newcontext } from './App'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import {FaEyeSlash,FaHeart, FaTrash} from "react-icons/fa"
import { Link } from 'react-router-dom'
function BookList() {
    const {array,setarray}=useContext(newcontext)
    const [input,setinput]=useState("")
    const [data,setdata]=useState("")
    // console.log(array);

const [book, setbook]=useState([])


const filter =book.filter((res)=>res.title.toLowerCase().includes(data.toLowerCase()));
    // console.log(filter)

useEffect(()=>{
   Axios.get(Api).then((res)=>setbook(res.data.books))
   setarray(book)
//    console.log(book);
   
},[book])
// console.log(array);

const searchtrack=(fn)=>{
    setinput(fn.target.value);   
  }
  const search=(e)=>{
    e.preventDefault();
    setdata(input);
  }
//   console.log(data);
//   console.log(input);


  return (
    
    <div>
        <Navbar className='navbar' expand="lg">
      <Container fluid>
        <Navbar.Brand className='text' href="#">E-Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text' href="#action1">Home</Nav.Link>
             
          </Nav>
          <Form className="d-flex" onChange={searchtrack}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='button' onClick={search} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   


        <Table className='body'>
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th>Book Name</th>
                    <th>Price</th>
                    <th>Code</th>
                    <th>Book Cover</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {filter.map((item)=>{
                    return(  
                        
                <tr>
                    <td></td>
                    <td className='title'>{item.title}</td>
                    <td className='title'>{item.price}</td>
                    <td className='title'>{item.isbn13}</td>
                    <td><img style={{height:"130px"}} src={item.image} alt="Image is not available" /></td> 
                    <td>
        <Link to={`/view/${item.isbn13}`}><FaHeart className='favicon'/><br/></Link>
        <br /><br /> 
        <Link to={`/${item.isbn13}`}><FaTrash className='deleteicon'/></Link>
          
        </td> 
                </tr>
                  )
                })}    
                                                 
            </tbody>
        </Table>


        
    </div>

    
  )
}

export default BookList
