"use client"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            alert(`Thank you, ${formData.name}! Your message has been sent.\n\nWe'll get back to you at ${formData.email} soon.`);
            // Reset form
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container className='my-5 py-5' id="contact">
            <Row className='justify-content-center'>
                <Col md={8} lg={6}>
                    <div className="glass-panel p-5 rounded-4">
                        <div className="text-center mb-4">
                            <h6 className="text-primary fw-bold text-uppercase letter-spacing-2">Get In Touch</h6>
                            <h2 className="fw-bold">Contact Me</h2>
                            <p className="text-muted">Have a question or want to work together? Drop me a line!</p>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-4" controlId="formName">
                                <Form.Label className="fw-medium">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    className="py-2 bg-light border-0"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formEmail">
                                <Form.Label className="fw-medium">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    className="py-2 bg-light border-0"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formMessage">
                                <Form.Label className="fw-medium">Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Enter your message"
                                    className="py-2 bg-light border-0"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <div className="d-grid">
                                <Button variant="primary" type="submit" size="lg" className="btn-primary-custom">
                                    Send Message
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;