import React from "react";
import { motion } from "framer-motion";
import Homebanner from "./Homebanner/Homebanner";
import Certification from "./Certification/Certification";
import Manufacturing from "./Manufacturingcapablities/Manufacturing";
import Watchvedios from "./Watchvedioscomp/Vediosection";
// import Casestudy from "./Casestudycomp/Casestudy";
import Blog from "./Blogcomp/Blog";
import ContactUs from "./Homecontactus/ContactUs";
import Paragraph from "./Paragraphcomp/Paragraph";
import IndustriesComp from "./Industriescomp/Industriescomp";
import OurProducts from "./OurProductscomp/OurProduct";
import { Helmet } from 'react-helmet-async';

const isMobile = window.innerWidth <= 769;

const sectionVariants = {
  hidden: (direction) => ({
    opacity: 0,
    y: direction === "up" ? 40 : -20,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

const Section = ({ children, index }) => {
  if (isMobile) {
    return <div style={{ marginBottom: "0px" }}>{children}</div>;
  } else {
    return (
      <motion.div
        custom={index % 2 === 0 ? "up" : "down"}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        style={{
          marginBottom: "0px",
          padding: "0px",
          overflow: "hidden",
        }}
      >
        {children}
      </motion.div>
    );
  }
};

const TotalHomePage = () => {
  return (
    <div style={{ padding: "0px", margin: "0px" }}>
          <Helmet>
      <title>Rugged IP69K ADAS Cameras for Autonomous & Off-Road Mobility</title>
      <meta name='description' content='IP69K ADAS cameras with HDR, LFM & ISO/IATF-certified build. Engineered for autonomous, off-road vehicles & delivery robots in extreme environments.' />
      </Helmet>
      <Section index={0}>
        <Homebanner />
      </Section>
      <Section index={1}>
        <Paragraph />
      </Section>
      <Section index={2}>
        <OurProducts />
      </Section>
      <Section index={3}>
        <IndustriesComp />
      </Section>
      <Section index={4}>
        <Certification />
      </Section>
      {/* <Section index={5}>
        <Manufacturing />
      </Section> */}
      <Section index={6}>
        <Watchvedios />
      </Section>
      {/* <Section index={7}>
        <Casestudy />
      </Section> */}
      <Section index={7}>
        <Blog />
      </Section>
      <Section index={8}>
        <ContactUs />
      </Section>
    </div>
  );
};

export default TotalHomePage;
