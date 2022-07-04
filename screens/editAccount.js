import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function EditAccount() {
  return (
    <Row>
      
      {/* Navigation bar */}
      <Navbar bg="dark justify-content-end py-3" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/workstack.jpg"
              width="30"
              className="d-inline-block align-top"
              alt=""
            />{' '}WORKSTACK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#board">Board</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  

      {/* Edit Account Form */}
      <Col className="bg-primary pt-5" sm={5}>
        <h1 className="text-light text-center fw-bold px-5 mx-5">Edit account here</h1>              

        <Form>
          <Form.Group className="mx-5 mt-5 mb-3" controlId="formBasicEmail">
            <Form.Control type="username" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
            <Form.Control type="repeatPassword" placeholder="Repeat password" />
          </Form.Group>

        {/* Login Button */}
        <div className="px-5 mt-3">
          <Button className="rounded-pill fw-bold text-light mx-auto mt-2 mb-4 px-5" variant="dark" size="md">Log me in!</Button>
        </div>
        </Form>
      </Col>

      {/* Image */}
      <Col className="mx-auto" sm={6}>
        <Image 
          src="https://img.freepik.com/free-vector/multitasking-theme-illustration_52683-32122.jpg?w=740&t=st=1656901137~exp=1656901737~hmac=7c134aec7b896d17e157ead7502ca7a660dcbcb133ac50045b36056bd7e4228d" 
          fluid 
          rounded
          width={700}
          className=""
          alt=""
        />
      </Col>
    </Row>
  );
}

export default EditAccount;