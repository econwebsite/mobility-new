import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Forwardtab from "./ProductTabscomp/Forwardtab";
import ProductBlog from "./ProductBlogs/ProductBlogs";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import ForwardApplications from './ProductApplication/ForwardApplications';
import ReleatedVideos from "./ReleatedVedioscomp/Releatedvedios"
import { Helmet } from 'react-helmet-async';



const Totalforwardfacing = () => {
  const location = useLocation();

  const isMobile = window.innerWidth <= 768;

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    willChange: "opacity, transform",
  },  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section = ({ children, id }) => (
  isMobile ? (
    <div id={id} style={{ marginBottom: "1px" }}>{children}</div>
  ) : (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      style={{ marginBottom: "1px",overflow:"hidden" }}
    >
      {children}
    </motion.div>
  )
);

  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.state?.hash || window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const header = document.querySelector('header') || document.querySelector('.mobile-header');
          const headerHeight = header ? header.offsetHeight : 80;
          const yOffset = -headerHeight -40;

          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: isMobile ? 'auto' : 'smooth' });
        }
      }
      if (location.state?.shouldScroll) {
        window.history.replaceState({}, document.title);
      }
    };
    const timeout = setTimeout(scrollToSection, isMobile ? 500 : 300);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div>
        <Helmet>
      <title>Front View Cameras for ADAS & Mobility</title>
      <meta name='description' content='Explore forward facing cameras with HDR, LFM & high resolution. Designed for ADAS in mobility systems—ideal for lane assist, collision alerts & sign detection.' />
      </Helmet>
      <Section id="top">
        <ProductBanner />
        <Whatisneed />
        <div  id="forwardTab">
              <div className='Total-Tab-title'>
                <p>e-con's Cameras for Forward Facing</p>
              </div>
          <Forwardtab />
        </div>
      </Section>
      <Section>
        <ForwardApplications />
      </Section>

      <Section>
        <ProductBlog />
      </Section>
  <ReleatedVideos/>

      <Section>
        <ContactUs />
      </Section>
    </div>
  );
};

export default Totalforwardfacing;
