import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import ProductBanner from './ProductBanner/ProductBanner';
import Whatisneed from "./WhatisNeedcomp/Whatisneed";
import Producttab from "./ProductTabscomp/Producttab"
import ProductApplications from "./ProductApplication/ProductApplications";
import ContactUs from "../../HomePagecomp/Homecontactus/ContactUs";
import ProductBlogs from './ProductBlogs/ProductBlogs';
import { Helmet } from 'react-helmet-async';


const TotalSurroundview = () => {
  const location = useLocation();

  const isMobile = window.innerWidth <= 768;

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Section = ({ children, id }) => (
  isMobile ? (
    <div id={id} style={{ marginBottom: "1px" }}>{children}</div>
  ) : (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
      style={{ marginBottom: "1px" }}
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
          const yOffset = -headerHeight - 130;

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
      <title>360&deg; Surround View Cameras for ADAS & Mobility</title>
      <meta name='description' content='Get real-time 360° surround view camera with HDR, high sensitivity, long-range sync & ISP. Perfect for blind spot monitoring, parking assist & ADAS in mobility systems.' />
      </Helmet>
             <Section id="top">
            <ProductBanner/>
            <Whatisneed/>
            <div id="surroundTab">
            <Producttab />
            </div>
            </Section>
            <Section>
            <ProductApplications/>
            </Section>
            <Section>
            <ProductBlogs/>
            </Section>
            <Section>
            <ContactUs/>
            </Section>
        </div>
    );
}

export default TotalSurroundview;
