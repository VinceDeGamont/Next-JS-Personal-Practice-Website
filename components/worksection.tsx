'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function WorkSection() {
    const works = [
        {
            title: "Digital Transformation",
            description: "Helping a legacy business transition to a modern digital ecosystem.",
            image: "/images/image-44.jpg"
        },
        {
            title: "E-Commerce Platform",
            description: "Building a scalable online store with seamless payment integration.",
            image: "/images/image-45.jpg"
        },
        {
            title: "Mobile Application",
            description: "Developing a cross-platform mobile app for enhanced user engagement.",
            image: "/images/image-46.jpg"
        }
    ];

    return (
        <Container className="py-5">
            <Row className='mb-5'>
                <Col md={12} className="text-center">
                    <h6 className="fw-bold text-uppercase letter-spacing-2" style={{ color: '#4f46e5' }}>Portfolio</h6>
                    <h2 className="display-5 fw-bold" style={{ color: '#0f172a' }}>Our Recent Work</h2>
                    <p className="lead mx-auto" style={{ maxWidth: '700px', color: '#64748b' }}>
                        These are some of my recent projects that I've worked on, and I'm a Chief Executive Officer of Desa Binaan FTI UNTAR 2026.
                    </p>
                </Col>
            </Row>
            <Row>
                {works.map((work, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="h-100 border-0 shadow-sm overflow-hidden card-hover">
                            <div style={{ width: '100%', overflow: 'hidden' }}>
                                <Card.Img
                                    variant="top"
                                    src={work.image}
                                    style={{ objectFit: 'cover', width: '100%', height: 'auto', minHeight: '200px' }}
                                />
                            </div>
                            <Card.Body className="d-flex flex-column p-4">
                                <Card.Title className="fw-bold mb-3" style={{ color: '#0f172a' }}>
                                    {work.title}
                                </Card.Title>
                                <Card.Text className="mb-4 flex-grow-1" style={{ color: '#64748b' }}>
                                    {work.description}
                                </Card.Text>
                                <Button
                                    variant="outline-primary"
                                    className="align-self-start rounded-pill px-4"
                                    onClick={() => alert(`Project: ${work.title}\n\n${work.description}\n\nThis is a demo. In a real application, this would navigate to a detailed project page.`)}
                                >
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default WorkSection;