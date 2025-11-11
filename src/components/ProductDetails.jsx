import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' })
        .then(() => navigate('/products'));
    };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error("Error fetching product details:", err));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <div style={{ padding: '20px' }}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <img 
                    src={product.image} 
                    alt={product.title}
                    style={{ height: '300px', objectFit: 'contain' }}
                />
                <Button variant="danger" onClick={handleShow}>Delete Product</Button>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button
                    variant="danger"
                    onClick={() => {
                        handleDelete();
                        handleClose();
                    }}
                    >
                    Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductDetails;