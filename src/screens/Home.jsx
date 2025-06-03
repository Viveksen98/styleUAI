import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../css/Home.css'
import H_list from '../components/H_list'
import Influencers_shoot from '../components/Influencers_shoot'
import Contactus from '../components/Contactus'
import Login from '../components/Login'
import Getstarted from '../components/Getstarted'
import Footer from '../components/Footer'
import { Element, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollToContact) {
            // Scroll after delay
            setTimeout(() => {
                scroller.scrollTo('Contactus', {
                    smooth: true,
                    duration: 500,
                });
            }, 100);

            // Clear the scrollToContact flag to prevent repeated scroll
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);
    return (
        <>
            <div className="circle-container circle-layer-1">
                <div className="circle"></div>
            </div>

            <div className="circle-container circle-layer-2">
                <div className="circle_2"></div>
            </div>

            <div className="circle-container circle-layer-3">
                <div className="circle_3"></div>
            </div>

            <div className="svg-blur-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="278" height="450" viewBox="0 0 548 900" fill="none">
                    <g filter="url(#filter0_f_1313_90)">
                        <circle cx="450" cy="450" r="100" className="circle_fade" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1313_90" x="0" y="0" width="900" height="900" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_1313_90" />
                        </filter>
                    </defs>
                </svg>
            </div>





            <div className='Home'>


                <div className='home-container' style={{ position: "relative" }}>


                    <span>
                        Empowering{" "}
                        <span
                            style={{
                                background: "linear-gradient(269deg, #7853FF 6.74%, #FF7765 98.14%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Fashion Brands
                        </span>{" "}

                        with AI Intelligence
                    </span>
                    <br />
                    <span className='home-container-span'>
                        Creating fashion business faster & more profitable
                    </span>
                    <br />
                    <span className='home-container-input'>
                        <input className='home-container-input-input' type="text" placeholder='Enter your email' />
                        <div className='home-container-input-button'>
                            <a href='https://calendly.com/hello-styleuai/30min' style={{ textDecoration: "none", color: "white" }}>Get Started</a></div>
                    </span>
                </div>
                <H_list />
                <Element name='About' >

                    <Influencers_shoot
                        title_name="Cut photoshoot costs:  transform images into model-ready visuals"
                        features_point={["Transform DIY photos into premium visuals using AI-generated models with StyleUA", "Accelerate product launches by creating marketing-ready images in just minutes."]} image_path="\images\images\Frame 11808670.svg"
                        display_efit="block"
                        display_custom="none"
                        swap={true} />
                    <Influencers_shoot
                        title_name="SEO Content"
                        features_point={["Automatically generates optimized captions, headlines, and keywords tailored for Google, Amazon, Flipkart, Myntra, Instagram & other platform", "Enhances search visibility and organic traffic.", "Provides custom-fit, platform-specific SEO content.", "Ensures consistent branding across multiple marketplaces"
                        ]} image_path="\images\images\Frame 11808664 (1).svg"
                        display_efit="none"
                        display_custom="none"
                        swap={false} />
                    < Influencers_shoot
                        title_name="Request-based custom edits" features_point={["Quick turnaround on custom image edits by expert designers", "Integrated team support alongside AI automation", "Scalable service accommodating urgent creative requests.", "Seamless workflow within StyleUAI platform."]} image_path="\images\images\Frame 11808669 (2).svg"
                        display_custom="block"
                        display_efit="none"
                        swap={true} />
                    <Influencers_shoot
                        title_name="Advanced Image Editing Tool"
                        features_point={["Image Enhancer : AI-powered tool that sharpens, upscales, and improves image quality for clearer, high-resolution visuals.", "Background Generator : Generates unique, aesthetic backgrounds using AI to boost image creativity and visual storytelling instantly", "Background Remover : Quickly removes image backgrounds with AI, isolating the subject for clean, professional-looking visuals."
                        ]} image_path="\images\images\Frame 11808664 (2).svg"
                        display_efit="none"
                        display_custom="none"
                        swap={false} />
                    <div className='For_gap'>
                        <Login />
                    </div>


                    <Influencers_shoot
                        title_name="Influencer Campaign"
                        features_point={["Access pre-approved influencer images ready for your products.",
                            "Eliminates photoshoot logistics, negotiations, and expenses.",
                            "Immediate credibility and enhanced customer engagement."
                            , "Extensive, scalable influencer content library."]}
                        image_path="\images\images\Frame 11808669.svg"
                        display_efit="none"
                        display_custom="none"
                        swap={true}
                    />

                    <Influencers_shoot
                        title_name="Analytics & Trends"
                        features_point={["AI-driven forecasting identifies emerging fashion trends early.",
                            "Social listening tracks real-time conversations and consumer preferences",
                            "Tailored insights for Gen Z and niche market segments."
                            , "Data-driven inventory and design decisions to stay ahead."]}
                        image_path="\images\images\Frame 11808664 (3).svg"
                        display_efit="none"
                        display_custom="none"
                        swap={false} />
                    <Influencers_shoot
                        title_name="Shopify/Commercial Site Integration"
                        features_point={["Direct API push to Shopify and other e-commerce platforms",
                            "Instant, error-free product listings from finalized StyleUAI visuals.",
                            "Accelerates time-to-market significantly."
                            , "Centralized product content management for easy updates and scalability.ata-driven inventory and design decisions to stay ahead."]}
                        image_path="\images\images\Frame 11808669 (3).svg"
                        display_efit="none"
                        display_custom="none"
                        swap={true} />
                </Element>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-4vw", marginBottom: "2vw" }}>
                    <Getstarted />

                </div>



                <Element name='Contactus'>
                    <Contactus />

                </Element>
            

            </div>

        </>
    )
}

export default Home