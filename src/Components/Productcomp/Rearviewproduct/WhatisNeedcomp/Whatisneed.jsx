import React from 'react';
import hdr from "../../../../assets/Productpage/what-needed/high-dynamic-range.jpg"
import diverselens from "../../../../assets/Productpage/what-needed/customizable-lens.jpg"
import ip69k from "../../../../assets/Productpage/what-needed/ip69k.jpg"

const cardData = [
  {
    title: 'High Dynamic Range (HDR)',
    description:"Rear-view conditions include direct sunlight, shaded areas, or harsh reflections. HDR ensures our cameras can adjust exposure dynamically to capture balanced images. It keeps critical elements like approaching vehicles, pedestrians, or loading docks clearly visible. In turn, this improves driver awareness and supports safe reversing or automated docking despite unpredictable lighting.",
    image: hdr,
  },
   {
    title: 'Wider FOV',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: hdr,
  },
  {
    title: 'High Sensitivity',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: hdr,
  },
  {
    title: 'IP69K-rated Enclosure',
    description: 'Rear-mounted cameras are exposed to water, dust, mud, and pressure washdowns. Our cameras come housed in IP69K-rated enclosures that withstand harsh outdoor conditions. It ensures superior performance through rain, snow, high-pressure cleaning, and off-road grime. Rear-view functionality is kept intact across industrial, commercial, and all-weather mobility operations.',
    image:ip69k,
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
