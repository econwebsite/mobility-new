import React from 'react';
import hdr from "../../../../assets/Productpage/what-needed/high-dynamic-range.jpg"
import widefield from "../../../../assets/Productpage/what-needed/wide-field-view.jpg"
import globalshutter from "../../../../assets/Productpage/what-needed/global-shutter.jpg"
import nirsensitivity from "../../../../assets/Productpage/what-needed/nir-sensitivity.jpg"

const cardData = [
  {
    title: 'IR illumination',
    description:"In low-light or nighttime driving, the IR illumination feature lets our cameras capture clear facial and eye movement data without distracting the driver. It enables continuous monitoring during late shifts, tunnel driving, or dimly lit cabins. This supports alertness detection, distraction warnings, and biometric tracking with consistent image quality.",
    image: hdr,
  },
  {
    title: 'Wide Field of View (FOV)',
    description: 'Driver monitoring requires full cabin visibility, from facial cues to hand movements. Our cameras feature a wide FoV to track the driver’s posture, gaze, and behavior without blind spots. So, mobility systems can interpret engagement levels and trigger safety responses in real time, across passenger vehicles, trucks, or autonomous platforms.',
    image: widefield,
  },
  {
    title: 'Global shutter',
    description: 'In-cabin vibrations or rapid head movements can blur images with rolling shutter sensors. Our cameras use global shutter technology to capture frames without distortion, even during sudden motion. It is critical for high-speed monitoring of micro-expressions, eye blinks, or gestures, delivering clean input for in-cabin analytics and behavioral AI models.',
    image:globalshutter,
  },
  {
    title: 'Near-Infrared (NIR) sensitivity',
    description: 'Our cameras are tuned for high NIR sensitivity, enabling them to operate alongside IR illumination with minimal noise and high contrast. They provide crisp imaging in dark or enclosed environments. It helps mobility systems identify fatigue, distraction, or unauthorized access, regardless of ambient light inside the vehicle.',
    image: nirsensitivity,
  },
  
];

const Whatisneed = () => {
  return (
    <div style={{backgroundColor:"#58a9ff"}}>
    <div className="whatisneed-container">
      <header className="whatisneed-header">
        <div>
          <h1>What is needed?</h1>
        </div>
      </header>

      <main>
        <ul className="whatisneed-cards" style={{ '--numcards': cardData.length }}>
          {cardData.map((card, index) => (
           <li
  className={`whatisneed-card ${index % 2 !== 0 ? 'reverse' : ''}`}
  id={`card-${index + 1}`}
  key={index}
  style={{ '--index': index + 1 }}
>

              <div className="whatisneed-cardcontent">
                <div>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
                <figure>
                  <img src={card.image} alt={card.title} />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
    </div>
  );
};

export default Whatisneed;
