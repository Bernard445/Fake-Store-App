import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className="mb-4">Welcome to the Fake Store</h1>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/products')}
          >
            View Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
