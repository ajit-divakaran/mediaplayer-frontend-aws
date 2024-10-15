import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <>
        <Container className = 'd-flex justify-content-center align-items-center py-5 px-4'>
          <Row className='mt-5 d-flex justify-content-center'>
            <Col md={6}>
            <h2>Welcome to <span className='text-warning'>Media Player</span></h2>
            <p style={{textAlign:'justify'}}>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non praesentium quos facilis illum eum sit! Pariatur odit voluptatibus, aliquam iusto possimus sunt recusandae aliquid nam officia rerum commodi enim ad eveniet illo placeat ullam architecto, exercitationem deleniti molestiae! Eligendi, illo quibusdam! Maiores distinctio voluptates nihil? Dicta iste nam earum repudiandae repellat debitis, quidem consequuntur consectetur qui explicabo quaerat deserunt officia. Sed similique cupiditate ad voluptates odio. Repellat eligendi reprehenderit animi aliquam voluptate qui fugiat natus, provident veritatis aperiam optio corporis odit doloribus corrupti accusantium hic placeat ullam illum deleniti et architecto est id aspernatur ducimus! Error aliquid illum autem exercitationem aut cum magni vel corrupti, mollitia ad, sapiente ea ipsum. Culpa officia praesentium omnis minus! Deserunt asperiores alias consequuntur quaerat voluptatibus explicabo suscipit veritatis porro at modi, obcaecati quam perspiciatis odit magni inventore debitis consequatur dolor commodi magnam voluptatem nesciunt nam molestiae incidunt. Nam eveniet perferendis, nesciunt iure doloribus voluptatibus quam veniam eius esse dolor autem qui explicabo quae et a excepturi voluptatum possimus quos velit provident voluptatem quaerat eum? Fuga, molestias exercitationem architecto reiciendis repellendus totam consequuntur nostrum omnis ipsum quisquam quod ullam ab ipsam perferendis tempora, eaque blanditiis velit repellat officia doloribus ex! Voluptate provident praesentium dolore.
            </p>
<Link to={'/home'}>
              <button className="btn btn-warning mt-5">Get Started</button>
  
</Link>            
</Col>
            <Col md={1}></Col>
            <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
            <img src="https://media2.giphy.com/media/UAxRAa9ygHR944eomK/giphy.gif?cid=6c09b9522tzhowlfc7fijt65e8kxeur7kyl44h5r2d9i9vga&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="no image" className='w-75' /></Col>
          </Row>
        </Container>
        <Container className='mt-5'>
          <h2 className="text-center">Features</h2>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
            <Row>

            <Col md={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>


            <Col md={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>


            <Col md={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
            </Row>

    

    
     </Col>
            <Col md={1}></Col>

          </Row>
        </Container>
    </>
  )
}

export default Landing