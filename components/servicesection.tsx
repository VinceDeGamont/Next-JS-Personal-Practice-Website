"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';

function ServiceSection() {
    const services = [
        {
            title: "Calisthenics",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "/images/about-icon1.jpg"
        },
        {
            title: "Cycling",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "/images/about-icon2.jpg"
        },
        {
            title: "Watching Movies",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "/images/about-icon3.jpeg"
        }
    ];

    return (
        <Container className='my-5 py-5'>
            <div className="text-center mb-5">
                <h6 className="text-primary fw-bold text-uppercase letter-spacing-2">MY HOBBIES</h6>
                <h2 className="display-5 fw-bold">These are my hobbies</h2>
            </div>
            <Row>
                {services.map((service, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="h-100 text-center p-4 card-hover border-0">
                            <Card.Body>
                                <div className="mb-4 d-flex justify-content-center">
                                    <div style={{ width: '200px', height: '200px', position: 'relative' }}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="img-fluid rounded-circle shadow-sm border border-primary"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                                <Card.Title className="fw-bold mb-3 text-primary">{service.title}</Card.Title>
                                <Card.Text className="fw-bold mb-3">
                                    {service.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ServiceSection;