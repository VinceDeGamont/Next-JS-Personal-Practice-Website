"use client"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Hi, Im VINCEN OKTA RAMADHAN",
            subtitle: "Im a Data Scientist.",
            imageUrl: "/images/banner_01.JPG",
        },
        {
            title: "Welcome to my practice website",
            subtitle: "Im a Data Engineer, Machine Learning Engineer.",
            imageUrl: "/images/banner_02.JPG",
        },
        {
            title: "I love money, peace, and happiness",
            subtitle: "and also, Im a Philanthropist.",
            imageUrl: "/images/banner_03.jpg",
        },
    ]

    return (
        <Carousel fade interval={1750} indicators={true} controls={true} pause={false}>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Carousel.Caption className="pb-5 mb-5">
                            <h1 className="display-3 fw-bold text-white mb-4 animate__animated animate__fadeInDown">{slide.title}</h1>
                            <p className="lead text-white-50 mb-4 fs-4 animate__animated animate__fadeInUp">{slide.subtitle}</p>
                            <Button
                                variant="primary"
                                size="lg"
                                className="btn-primary-custom animate__animated animate__fadeInUp"
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Get Started
                            </Button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            )
            )}
        </Carousel>
    )
}

export default HeroSection;