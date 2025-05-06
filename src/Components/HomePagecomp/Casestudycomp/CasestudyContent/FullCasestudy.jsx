import React from "react";
import './fullcase.css';
import caseimg from "../../../../assets/hubpage/casestudy/mining-banner.jpg";
import threesixty from "../../../../assets/hubpage/casestudy/360-icon.png";
import harshicon from "../../../../assets/hubpage/casestudy/harsh-environment-icon.png";
import inability from "../../../../assets/hubpage/casestudy/real-time-data-icon.png";
import integrity from "../../../../assets/hubpage/casestudy/integrity-complexities-icon.png";

import miningcard from "../../../../assets/hubpage/casestudy/benifits-card-img.jpg"
import Modelbutton from "../../../ButtonComp/Modelbutton";
import { Helmet } from 'react-helmet-async';

const FullCasestudy = () => {
  return (
    <div className="future-case-container">
       <Helmet>
                <title>Developing a rugged, multi-camera setup for off-road mining vehicles</title>
                <meta name='description' content='Learn how e-con Systems developed a custom camera for an AI-driven, portable pre-cancer screening device. Discover the innovations and solutions provided.' />
            </Helmet>
      <div className='mainContainer'>
        <div className="future-case-banner">
          <img src={caseimg} alt="Banner" className="w-100" />
          <h1 className="future-case-heading">
          Developing a rugged, multi-camera setup for off-road mining vehicles
          </h1>
          <Modelbutton className="future-case-button" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="CaseStudy" docName="point-of-care-device" title="Case Study" />

        </div>

        <h2 className="future-case-sub-heading">Summary of the Solution</h2>
        <p className="future-case-paragraph">
        e-con Systems worked with a leading mining technology provider to develop a rugged, multi-camera surround view system for large off-road vehicles. We deployed high-resolution cameras integrated with a high-performance Sony sensor and came with features like 15-meter cable support, IP67-rated enclosures, customized ISP tuning and more.
        </p>

        <h2 className="future-case-sub-heading">Key Challenges Faced by the Client</h2>
        <div className="future-case-image-row">
          <div className="future-case-challenge">
            <img src={threesixty} alt="Challenge 1" className="future-case-challenge-image" />
            <p>Lack of a seamless 360° view to fully eliminate blind spots</p>
          </div>
          <div className="future-case-challenge">
            <img src={harshicon} alt="Challenge 2" className="future-case-challenge-image" />
            <p>Harsh environmental exposure that affects imaging performance</p>
          </div>
          <div className="future-case-challenge">
            <img src={inability} alt="Challenge 3" className="future-case-challenge-image" />
            <p>Inability to provide alerts to operators based on real-time data</p>
          </div>
          <div className="future-case-challenge">
            <img src={integrity} alt="Challenge 3" className="future-case-challenge-image" />
            <p>Integration complexities with the systems of mining vehicles</p>
          </div>
        </div>

        {/* Benefits Section */}
        <h2 className="future-case-benefits-title">Benefits of the Solution</h2>
        <div className="future-case-benefits-container">
          <img src={miningcard} alt="Benefits" className="future-case-benefits-image" />
          <div className="future-case-benefits-details">
            <ul>
              <li>Improved safety through real-time monitoring of blind spots</li>
              <li>Higher uptime due to fewer accidents and faster decision-making</li>
              <li>Durability in extreme weather and terrain with IP67 camera enclosures</li>
              <li>Faster deployment by avoiding changes to vehicle chassis or wiring</li>
              <Modelbutton className="ProductTabs-Button" text="Download casestudy" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" productName="CaseStudy" docName="point-of-care-device" title="Case Study"/>

            </ul>
          </div>
        </div>
        <br></br>

        {/* Related Case Studies Section */}
        {/* <h2 className="related-case-studies-title">Related Case Studies</h2>
        <div className="related-case-container">
          <div className="related-case-card">
          <Link className="fuCaseIMGLINK" to="/case-studies/dual-ethernet-camera-integration" style={{ textDecoration: "none" }}>
            <img src={dualethernet} alt="Case Study 1" className="related-case-image" />
            </Link>
            <div className="related-case-details">
            <Link className="fuCaseTitleLINK" to="/case-studies/dual-ethernet-camera-integration" style={{ textDecoration: "none" }}>
              <h3>Integrating Dual Ethernet Cameras into Dental Operatory Lights for Improved Functionality</h3>
              </Link>
              <p>Explore how we successfully integrated dual 4K cameras into dental operatory lights for a leading European dental device manufacturer.</p>
              <div className="releated-case-bu">
                <AnimatedButton className="related-case-button" text="Know more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/case-studies/dual-ethernet-camera-integration" />
              </div>
            </div>
          </div>
          
          <div className="related-case-card">
          <Link className="fuCaseIMGLINK" to="/case-studies/4k-dental-loupe-camera-improvement" style={{ textDecoration: "none" }}>
            <img src={relatedCaseImg2} alt="Case Study 2" className="related-case-image" />
            </Link>
            <div className="related-case-details">
            <Link className="fuCaseTitleLINK" to="/case-studies/4k-dental-loupe-camera-improvement" style={{ textDecoration: "none" }}>
              <h3>Improving Dental Documentation using 4k Dental Loupe Camera for a Leading Europe Based Dental Imaging Solutions Provider</h3>
              </Link>
              <p>This case study explores how e-con Systems developed a custom 4K dental loupe camera for a leading European dental imaging solutions provider.</p>
              <div className="releated-case-bu">
                <AnimatedButton className="related-case-button" text="Know more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/case-studies/4k-dental-loupe-camera-improvement" />
              </div>
            </div>
          </div>
          
        </div> */}
      </div>
    </div>
  );
};

export default FullCasestudy;
