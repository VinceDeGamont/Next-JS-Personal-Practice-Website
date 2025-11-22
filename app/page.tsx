"use client";
import React from "react";
import Image from "next/image";

// Components
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

// Bootstrap
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <Container className="my-5 py-5">
          <Row className="align-items-center gx-5">
            <Col md={6} className="mb-5 mb-md-0">
              <h6 className="text-primary fw-bold text-uppercase letter-spacing-2">About Me</h6>
              <h2 className="display-5 fw-bold mb-4">I'm a Tech Enthusiast and a business man</h2>
              <p className="lead text-muted mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex.
              </p>
              <p className="text-muted mb-4">
                Dolor ab eum dolore earum magni aut quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, veritatis.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="btn-primary-custom"
                onClick={() => {
                  const servicesSection = document.querySelector('.my-5.py-5');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </Col>
            <Col md={6}>
              <div className="position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4 opacity-10" style={{ transform: 'translate(-20px, -20px)', zIndex: -1 }}></div>
                <Image
                  src="/images/about.jpeg"
                  alt="About Us"
                  width={600}
                  height={500}
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <section className="bg-light">
          <WorkSection />
        </section>
        <ServiceSection />
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </div>
  );
}