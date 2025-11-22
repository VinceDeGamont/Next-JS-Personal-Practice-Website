'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar
            expand="lg"
            className={`fixed-top transition-all duration-300 ${scrolled ? 'glass-panel py-2' : 'bg-transparent py-4'}`}
            data-bs-theme={scrolled ? "light" : "dark"}
        >
            <Container>
                <Navbar.Brand
                    href="#"
                    className="fw-bold fs-3 text-primary-custom"
                    onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                >
                    535240064
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 ms-lg-4"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link
                            href="#"
                            className="mx-2 fw-medium"
                            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#"
                            className="mx-2 fw-medium"
                            onClick={(e) => {
                                e.preventDefault();
                                const aboutSection = document.querySelector('.my-5.py-5');
                                aboutSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            About
                        </Nav.Link>
                        <NavDropdown title="More Info" id="navbarScrollingDropDown" className="mx-2 fw-medium">
                            <NavDropdown.Item
                                href="#"
                                onClick={(e) => { e.preventDefault(); alert('Projects are coming soon!'); }}
                            >
                                Projects
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#"
                                onClick={(e) => { e.preventDefault(); alert('Internship Experience are coming soon!'); }}
                            >
                                Internship Experiences
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                href="#"
                                onClick={(e) => { e.preventDefault(); alert('Academic History are coming soon!'); }}
                            >
                                Academic History
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="#"
                            className="mx-2 fw-medium"
                            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;

