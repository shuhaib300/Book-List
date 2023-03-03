import React, { useContext, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { newcontext } from './App';

function View() {
  const {array,setarray}=useContext(newcontext)
  // const [favorite,setfavorite]=useState([])
  const {isbn13}=useParams()
  console.log(array);
  console.log(isbn13);
  
  const [filter]=array.filter((res)=>res.isbn13==isbn13)
  console.log(filter);
  // setfavorite([...favorite,isbn13])
  // console.log(favorite);
  return (
    <div>
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
                {/* {favorite.isbn13.map((items)=>{
                  return( */}
                
                        
                <tr>
                    <td></td>
                    <td className='title'>{filter.title}</td>
                    <td className='title'>{filter.subtitle}</td>
                    <td className='title'>{filter.isbn13}</td>
                    <td><img style={{height:"130px"}} src={filter.image} alt="Image is not available" /></td> 
                      
        
                </tr>
                    
                    {/* )
                  })}                            */}
            </tbody>
        </Table>
    </div>
  )
}

export default View