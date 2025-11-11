import { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  // 1️⃣ Create all your states at the top
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);     // <-- add this
  const [error, setError] = useState(null);         // <-- add this
  const navigate = useNavigate();

  // 2️⃣ useEffect: where you fetch data
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {                              // <-- optional check
          throw new Error('Network response failed');
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);                          // <-- stop loading after success
      })
      .catch(err => {                               // ✅ your catch belongs here
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  // 3️⃣ Conditional rendering — these come *before* your main return
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <h1 className="my-4">Product List</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                  <Button onClick={() => navigate(`/products/${product.id}`)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  ); 
}
export default ProductList;
