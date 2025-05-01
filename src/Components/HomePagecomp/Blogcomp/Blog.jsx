import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import forwardfacing from "../../../assets/homepage/forwardfacing-blog.jpg";
import hdrled from "../../../assets/homepage/hdr-led-blog.jpg";
import drivermonitoring from "../../../assets/homepage/drivermonitoring-blog.jpg";
import surroundview from "../../../assets/homepage/surroundview-blog.jpg";
import AnimationButton from "../../ButtonComp/AnimationButton"
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (

    <div className="ProductBlogs-Total">
      <Helmet>
            <title>Driving the Future | e-con Mobility Blogs & Updates</title>
            <meta name='description' content='Explore the latest in rugged camera technology, ADAS innovations, and mobility insights from e-con Mobility. Stay ahead with our expert blogs and updates.' />
          </Helmet>
      <h1 className="ProductBlogs-title">BLOGS</h1>
      <div className='mainContainer'>
        <div className="ProductBlogs-cards">
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/blog/how-forward-facing-camera-works-in-adas/" style={{ textDecoration: "none" }}>
              <img src={forwardfacing} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blog/how-forward-facing-camera-works-in-adas/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How Does a Forward-Facing Camera Work, and What Are Its Use Cases in ADAS</h2>
            </Link>
            <p className="ProductBlogs-card-text">Forward-facing cameras are used in ADAS to improve object detection, lane tracking, etc. Discover the camera features that contribute to safer, smarter driving.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/blog/how-forward-facing-camera-works-in-adas/" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>
              <img src={hdrled} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">Why HDR and LED Flicker Mitigation Are Game-Changers for Forward-Facing Cameras in ADAS</h2>
            </Link>
            <p className="ProductBlogs-card-text">Advanced driver-assistance systems depend on HDR and LED flicker mitigation features. Learn about the crucial role of forward facing cameras in enhancing ADAS safety.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" className="Blog-readmore-btn" />
          </div>

          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>
              <img src={drivermonitoring} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How driver monitoring cameras improve driving safety and their key features</h2>
            </Link>
            <p className="ProductBlogs-card-text">Driver monitoring cameras improve road safety by helping detect fatigue and distractions. Explore the camera features that make them deliver safe driving practices.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/blog/how-driver-monitoring-cameras-improve-safety-features/" className="Blog-readmore-btn" />
          </div>
          <div className="ProductBlogs-card">
            <Link className="cardImgLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
              <img src={surroundview} alt="AI-enabled point of care device" className="ProductBlogs-card-image" />
            </Link>
            <Link className="cardTitleLink" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" style={{ textDecoration: "none" }}>
              <h2 className="ProductBlogs-card-title">How do Surround View cameras improve driving and parking safety</h2>
            </Link>
            <p className="ProductBlogs-card-text">Surround-view systems provide 360-degree visibility to eliminate blind spots and improve safety. Get to know how cameras help them reduce the risk of collisions.</p>
            <AnimationButton text="Read more" backgroundColor="#344ea1" hoverColor="white" animationColor="#69ba2f" to="/blog/how-surround-view-cameras-improve-driving-parking-safety/" className="Blog-readmore-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
