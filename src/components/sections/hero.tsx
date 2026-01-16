'use client'
import { Link as Linkscroll } from 'react-scroll';
import SlideUp from "@/utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3><i className="ri-hotel-line" />Revenue Management | Digital Marketing | AI Solutions</h3>
                            <h2>Empowering Hospitality Worldwide</h2>
                            <p>HumanusX empowers your hotel's success with customized revenue management, AI, digital marketing, and social media services.</p>
                            <div className="hero-btns">
                                <Linkscroll smooth={true} to="services" className="theme-btn">Our Services</Linkscroll>
                                <Linkscroll smooth={true} to="contact" className="theme-btn differenct-color">Contact Us</Linkscroll>
                            </div>
                            <div className="dot-shape"><img src="/images/shapes/shape1.png" alt="Shape" /></div>
                            <div className="dot-shape2"><img src="/images/shapes/shape2.png" alt="Shape" /></div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero