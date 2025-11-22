"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            alert(`Thank you for subscribing!\n\nWe'll send updates to: ${email}`);
            setEmail('');
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <footer id="footer" className="pt-5 pb-3">
            <Container>
                <Row className="gy-4">
                    {/* Our Products */}
                    <Col md={3}>
                        <h5 className="fw-bold mb-3">Our Products</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Account page coming soon!'); }}>Account</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Bundle page coming soon!'); }}>Bundle</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Blog page coming soon!'); }}>Blog</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Circular page coming soon!'); }}>Circular</a></li>
                        </ul>
                    </Col>
                    {/* Quick Link */}
                    <Col md={3}>
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('About page coming soon!'); }}>About Us</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Services page coming soon!'); }}>Services</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Work page coming soon!'); }}>Work</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Products page coming soon!'); }}>Products</a></li>
                        </ul>
                    </Col>
                    {/* Terms */}
                    <Col md={3}>
                        <h5 className="fw-bold mb-3">Legal</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Refund Policy page coming soon!'); }}>Refund Policy</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy page coming soon!'); }}>Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('License page coming soon!'); }}>License</a></li>
                            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); alert('Terms of Service page coming soon!'); }}>Terms of Service</a></li>
                        </ul>
                    </Col>
                    {/* Search + Social */}
                    <Col md={3}>
                        <h5 className="fw-bold mb-3">Newsletter</h5>
                        <p className="small text-muted">Subscribe to get the latest updates.</p>
                        <Form className="mb-4" onSubmit={handleNewsletterSubmit}>
                            <InputGroup>
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    className="border-0 bg-white shadow-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button variant="primary" className="btn-primary-custom rounded-end" type="submit">
                                    <i className="bi bi-send"></i>
                                </Button>
                            </InputGroup>
                        </Form>
                        <h5 className="fw-bold mb-3">Follow Us</h5>
                        <ul className="list-unstyled d-flex gap-3">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted fs-5 hover-primary"><i className="bi bi-facebook"></i></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted fs-5 hover-primary"><i className="bi bi-twitter-x"></i></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted fs-5 hover-primary"><i className="bi bi-instagram"></i></a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted fs-5 hover-primary"><i className="bi bi-linkedin"></i></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-5 pt-4 border-top">
                    <Col md={12} className="text-center text-muted small">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Vincen Okta Ramadhan. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}