import React from 'react';
import hdr from "../../../../assets/Productpage/what-needed/high-dynamic-range.jpg"
import lfm from "../../../../assets/Productpage/what-needed/lfm.jpg"
import highresolution from "../../../../assets/Productpage/what-needed/high-resolution.jpg"
import customizablelens from "../../../../assets/Productpage/what-needed/customizable-lens.jpg"

const cardData = [
  {
    title: 'High Dynamic Range (HDR)',
    description:"HDR empowers mobility systems to deliver high-quality visuals in difficult lighting contrasts like exiting a tunnel or passing streetlights at night. By balancing overexposed and underexposed areas, our cameras keep lane markings, road signs, and moving objects visible across varied conditions, day or night. This leads to better object detection and safer navigation.",
    image: hdr,
  },
  {
    title: 'LED Flicker Mitigation (LFM)',
    description: 'LED lighting creates flickering artifacts in camera feeds, especially from traffic signals or digital signs. Our cameras use LFM to match the sensor timing with LED pulse rates, preventing inconsistent image capture. It guarantees reliable detection in LED-lit settings like tunnels, intersections, and nighttime streets for continuous, stable monitoring.',
    image: lfm,
  },
  {
    title: 'High resolution',
    description: 'Resolution plays a major role in forward-facing systems when identifying small or distant objects. Our cameras offer high-resolution output to capture fine details such as lane borders, pedestrians, or road signs. It helps mobility systems make faster, more accurate decisions by giving them sharper input for object classification and long-range image analysis.',
    image:highresolution,
  },
  {
    title: 'Multiple lens option',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: highresolution,
  },
   {
    title: 'Rugged Enclosure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: highresolution,
  },
   
];

const Whatisneed = () => {
  return (
    <div style={{backgroundColor:"#58a9ff"}}>
    <div className="whatisneed-container">
      <header className="whatisneed-header">
        <div>
          <h1>What Our Cameras Offer?</h1>
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
