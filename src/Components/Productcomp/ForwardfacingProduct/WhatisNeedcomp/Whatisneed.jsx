import React from 'react';
import hdr from "../../../../assets/Productpage/what-needed/high-dynamic-range.jpg"
import lfm from "../../../../assets/Productpage/what-needed/lfm.jpg"
import highresolution from "../../../../assets/Productpage/what-needed/high-resolution.jpg"
import mutiplelense from "../../../../assets/Productpage/what-needed/multiple-lens.jpg"
import ip69k from "../../../../assets/Productpage/what-needed/ip69k.jpg"
import hdricon from "../../../../assets/Productpage/what-needed/hdr-icon.png"
import lfmicon from "../../../../assets/Productpage/what-needed/lfm-icon.png"
import highresicon from "../../../../assets/Productpage/what-needed/high-resolution-icon.png"
import ip69icon from "../../../../assets/Productpage/what-needed/ip69-icon.png"
import multiplelenseicon from "../../../../assets/Productpage/what-needed/multiple-lense-icon.png"

const cardData = [
  {
    title: 'High dynamic range (HDR)',
    description:"HDR empowers mobility systems to deliver high-quality visuals in difficult lighting contrasts like exiting a tunnel or passing streetlights at night. By balancing overexposed and underexposed areas, our cameras keep lane markings, road signs, and moving objects visible across varied conditions, day or night. This leads to better object detection and safer navigation.",
    image: hdr,
  },
  {
    title: 'LED flicker mitigation (LFM)',
    description: 'LED lighting creates flickering artifacts in camera feeds, especially from traffic signals or digital signs. Our cameras use LFM to match the sensor timing with LED pulse rates, preventing inconsistent image capture. It guarantees reliable detection in LED-lit settings like tunnels, intersections, and nighttime streets for continuous, stable monitoring.',
    image: lfm,
  },
  {
    title: 'High resolution',
    description: 'Resolution plays a major role in forward-facing systems when identifying small or distant objects. Our cameras offer high-resolution output to capture fine details such as lane borders, pedestrians, or road signs. It helps mobility systems make faster, more accurate decisions by giving them sharper input for object classification and long-range image analysis.',
    image:highresolution,
  },
  {
    title: 'Option for multiple lenses',
    description: 'Different mobility tasks call for different visual priorities. In addition to customizable lenses, our cameras offer multiple pre-qualified lens options to match varying detection ranges, FoV needs, and platform setups. This streamlines integration without compromising performance.',
    image: mutiplelense,
  },
   {
    title: 'Rugged enclosure',
    description: 'Forward-mounted cameras face constant exposure to dust, debris, and weather. Our rugged enclosures protect internal electronics against shocks and the elements, maintaining image integrity across terrain and usage extremes.',
    image: ip69k,
  },
  {
    type: 'features',
    title: 'What is needed?',
    features: [
      { icon: hdricon, label: 'High dynamic range (HDR)' },
      { icon: lfmicon, label: 'LED flicker mitigation (LFM)' },
      { icon:highresicon, label: 'High resolution' },
      { icon: multiplelenseicon, label: 'Option for multiple lenses' },
      { icon: ip69icon, label: 'Rugged enclosure' },
    ]
  }
   
];

const Whatisneed = () => {
   return (
    <div style={{backgroundColor:"#5F77B1"}}>
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
              className={`whatisneed-card ${index % 2 !== 0 ? 'reverse' : ''} ${card.type === 'features' ? 'features-card' : ''}`}
              key={index}
              style={{ '--index': index + 1 }}
            >
              {card.type === 'features' ? (
                <div className="whatisneed-cardcontent">
                  <div className="features-content">
                    <h2>{card.title}</h2>
                    <div className="feature-items">
                      {card.features.map((feature, idx) => (
                        <div className="feature-item" key={idx}>
                          <img src={feature.icon} className={feature.icon}></img>
                          <span>{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="whatisneed-cardcontent">
                  <div>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                  <figure>
                    <img src={card.image} alt={card.title} />
                  </figure>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
    </div>
  );
};

export default Whatisneed;