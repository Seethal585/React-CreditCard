// import logo from './logo.svg';
import React, {useState} from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Col, Form, Button} from 'react-bootstrap'

function App() {
const [number,setNumber] = useState('')
const [name,setName] = useState('')
const [expiry,setExpiry] = useState('')
const [cvc,setCvc] = useState('')
const [focus,setFocus] = useState('')

return (
  <div id="body" className='App'> 
    <Cards id="card"
    number = {number}
    name = {name}
    expiry = {expiry}
    cvc = {cvc}
    focused = {focus}
    />
    
    <Form id="form-test">
{/* Card Number */}
      <Form.Group controlId="formCardNumber">
        <Form.Label for="cc-number" class="control-label mb-1">Card Number </Form.Label>
        <Form.Control id="form-control" type="tel" name = 'number' placeholder='Card Number' value = {number} 
                    onChange={e => setNumber(e.target.value)} 
                    onFocus = {e => setFocus(e.target.name)}/>
        <Form.Text className="text-muted">
          Please enter a 16 digit number
        </Form.Text>
      </Form.Group>
{/* Card Name */}
      <Form.Group controlId="formCardName">
        <Form.Label for="cc-number" class="control-label mb-1">Card Name </Form.Label>
          <Form.Control id="form-control" type="text" name = 'name' placeholder='Card Name' value = {name} 
                  onChange={e => setName(e.target.value)} 
                  onFocus = {e => setFocus(e.target.name)}/>
      </Form.Group>
      <Form.Row>
{/* Expiration Date */}
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Expiration Date</Form.Label>
            <Form.Control  id="form-control" type="tel" name = 'expiry' placeholder='MM/YY' value = {expiry} 
                onChange={e => setExpiry(e.target.value)} 
                onFocus = {e => setFocus(e.target.name)}/>
        </Form.Group>
{/* CVV */}
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CVV</Form.Label>
            <Form.Control id="form-control" type="tel" name = 'cvc' placeholder='CVV' value = {cvc} 
                onChange={e => setCvc(e.target.value)} 
                onFocus = {e => setFocus(e.target.name)}/>
        </Form.Group>
      </Form.Row>
  
      <Button id="submit-button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
)
}


export default App;
