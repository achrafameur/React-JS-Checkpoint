import logo from './logo.svg';
import './App.css';
import {Button,Col,Container,Form, Navbar, Row} from 'react-bootstrap'

function App() {

  return (
<div className="parent">
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React CheckPoint
      </Navbar.Brand>
    </Container>
  </Navbar>
    </div>
    <div>
  <Form className="form">
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Row>
  
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="Address" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Address 2" />
    </Form.Group>
  
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control placeholder="City"/>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose your state </option>
          <option>Sousse</option>
          <option>Tunis</option>
          <option>Sfax</option>
          <option>Ariana</option>
          <option>Monastir</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
    </Row>
  
    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div> 
</div>  
);
}

export default App;
