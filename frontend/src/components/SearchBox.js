import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (

    <Form class="form-inline" onSubmit={submitHandler} >
      
      <Form.Control
      
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        class="ms-auto-2"
       
      ></Form.Control>
   
   <Button  type='submit' variant='outline-success' class="form-control mb-12 mr-auto-12">
   <div>Search</div> 
  </Button>
      
    </Form>
    
    
  )
}
export default SearchBox
