import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import ProductTableData from "../Driversupports/ProductTableData";
import STURDeCAM27 from "../../../../assets/allcameras/sturdecam29.jpg";
import STURDeCAM29 from "../../../../assets/allcameras/sturdecam29.jpg";
import Modelbutton from "../../../ButtonComp/Modelbutton"
import ambrella from "../../../../assets/Productpage/platformsupport/ambarella.jpg";
import renasas from '../../../../assets/Productpage/platformsupport/renesas.jpg';
import qualcum from "../../../../assets/Productpage/platformsupport/qualcom.jpg";
import npx from "../../../../assets/Productpage/platformsupport/npx.jpg";
import nvidia from "../../../../assets/Productpage/platformsupport/nividia.jpg"



const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Incabin = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('All cameras');
  const [selectedRightTab, setSelectedRightTab] = useState('eDACAM27');

  const location = useLocation();
  const windowSize = useWindowSize();

  const images = [
    { id: 1, src: [ambrella], alt: 'ambrella' },
    { id: 2, src: [renasas], alt: 'renasas' },
    { id: 3, src: [qualcum], alt: "qualcum" },
    { id: 4, src: [npx], alt: 'nxp' },
    { id: 5, src: [nvidia], alt: 'nvidia' }

  ];
 
  const rightTabs = {   
    'Supported Cameras': {
      tabs: ['CAMERA_MODEL_1', 'CAMERA_MODEL_2'],
      images: [],
      bgColor: '#f1f2f2',
      color: '#344ea1',
    },
    'All cameras': {
      tabs: ['eDACAM27', 'eDACAM29'],
      content: {
        'eDACAM27': {
            tableData: [
            ['Sensor','OmniVision&trade; OV2312'],
            ['Frame Rate', '2MP @ 36 fps'],
            ['Output Format', 'RGB - UYVY & IR - UYVY'],
            ['Interface', 'GMSL2'],
            ['FOV', ' 87.89° (D) x 80.86° (H) x 50.72° (V)'],
            ['Temperature', ' -40°C to +80°C'],
           ['ISP', 'On-board high performance ISP'],
          ['Form factor', '30 x 30 mm'],
          ],
           highlights: [
            "Automotive-grade image sensor with a well-tuned ISP",
            "Supports both day and night monitoring",
            "940nm IR illumination LED ",
            "Available in multiple FOV options",
           ],
          title: "eDACAM27 - 2MP OV2312 Global Shutter RGB-IR Camera",
          doctitle: "Technical documents for STURDeCAM27",
        },
        'eDACAM29': {
           tableData: [
            ['Sensor','OmniVision&trade; OV2311 '],
            ['Frame Rate', '2MP @ 40 fps'],
            ['Output Format', 'Y8 (8-bit)/Y16 (10-bit)'],
            ['Interface', 'GMSL2'],
            ['DFOV', '71.6°'],
            ['Temperature', '-30°C to 70°C'],
           ['ISP', 'On-board high performance ISP'],
          ['Form factor', '30mm x 30mm'],
          ],
             highlights: [
            "Automotive-grade image sensor with a well-tuned ISP",
            "Supports both day and night monitoring",
            "940nm IR illumination LED ",
            "Available in multiple FOV options",
           ],
          title: "eDACAM29 - 2MP OV2311 Global Shutter Monochrome Camera",
          doctitle: "Technical documents for STURDeCAM29",
        },
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM27, STURDeCAM29],
    }
  };
  
  useEffect(() => {
      const hash = window.location.hash?.replace("#", "");
      if (hash) {
        const [rawLeft, right] = hash.split("/");
        const left = rawLeft?.replace(/-/g, " "); 
  
        if (rightTabs[left]) {
          setSelectedLeftTab(left);
          if (rightTabs[left].tabs.includes(right)) {
            setSelectedRightTab(right);
            setTimeout(() => {
              const element = document.getElementById(right);
              if (element) {
                const offset = 100; 
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 200); 
          } else {
            const defaultRight = rightTabs[left].tabs[0];
            setSelectedRightTab(defaultRight);
          }
        } else {
          for (const leftTab in rightTabs) {
            if (rightTabs[leftTab].tabs.includes(hash)) {
              setSelectedLeftTab(leftTab);
              setSelectedRightTab(hash);
              setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                  // Add offset scrolling here
                  const offset = 100; // Adjust as needed
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - offset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 200);
              break;
            }
          }
        }
      }
    }, []);
  
  
    
      useEffect(() => {
        const leftTab = location.state?.leftTab;
        const rightTab = location.state?.rightTab;
    
        if (leftTab && rightTabs[leftTab]) {
          setSelectedLeftTab(leftTab);
          if (rightTab && rightTabs[leftTab].tabs.includes(rightTab)) {
            setSelectedRightTab(rightTab);
          } else {
            setSelectedRightTab(rightTabs[leftTab].tabs[0]);
          }
        }
      }, [location.state]);
    
       useEffect(() => {
      if (windowSize.width <= 1110 && selectedLeftTab === "All Cameras") {
        const fallbackTab = Object.keys(rightTabs).find(
          (tab) => tab !== "All Cameras" && tab !== "Supported Cameras"
        );
        if (fallbackTab) {
          setSelectedLeftTab(fallbackTab);
          setSelectedRightTab(rightTabs[fallbackTab].tabs[0]);
        }
      }
    }, [windowSize.width, selectedLeftTab]);
    
  const handleLeftTabClick = (tab) => {
      if (tab === "Supported Cameras") return;
      const defaultRightTab = rightTabs[tab].tabs[0];
      setSelectedLeftTab(tab);
      setSelectedRightTab(defaultRightTab);
          window.history.pushState(
        null, 
        '', 
        `#${tab.replace(/\s+/g, "-")}/${defaultRightTab}`
      );
    };
  
    const handleRightTabClick = (tab) => {
      setSelectedRightTab(tab);
          window.history.pushState(
        null, 
        '', 
        `#${selectedLeftTab.replace(/\s+/g, "-")}/${tab}`
      );
    };
  
      const currentContent =
        rightTabs[selectedLeftTab]?.content?.[selectedRightTab] || null;
    
      const currentImage =
        rightTabs[selectedLeftTab]?.images?.[
          rightTabs[selectedLeftTab].tabs.indexOf(selectedRightTab)
        ] || null;
  

  return (
    <div className="ProductTabs-Total">
      <h1>e-con's Cameras for In-Cabin Monitoring Cameras</h1>
      <div className='mainContainer'>
        <div className="ProductTabs-newcontainpro">
          <div className="ProductTabs-Container">
            <div className="ProductTabs-LeftSide">
              {Object.keys(rightTabs).map((heading, index) => (
                <div
                  key={index}
                  className={`ProductTabs-LeftHeading ${heading === 'All Cameras' ? 'all-tab' : ''} ${heading === 'Camera' ? 'camera' : ''
                    } ${selectedLeftTab === heading ? 'active' : ''}`}
                  onClick={() => handleLeftTabClick(heading)}
                  style={{
                    backgroundColor: rightTabs[heading].bgColor,
                    color: rightTabs[heading].color,
                    borderColor: selectedLeftTab === heading ? '#003873' : '#344ea1',
                    cursor: heading === 'Supported Cameras' ? 'default' : 'pointer',
                  }}
                >
                  {heading}
                </div>

              ))}
            </div>


            <div className="ProductTabs-RightSide">
              {rightTabs[selectedLeftTab].tabs && (
                <div className="ProductTabs-RightTabBox">
                  {rightTabs[selectedLeftTab].tabs.map((rightTab, index) => (
                    <div
                      key={index}
                      className={`ProductTabs-RightTab ${selectedRightTab === rightTab ? 'active' : ''}`}
                      onClick={() => handleRightTabClick(rightTab)}
                    >
                      {rightTab}
                    </div>
                  ))}
                </div>
              )}

              {selectedRightTab && currentContent && (
                <div className="ProductTabs-ContentBox" id={selectedRightTab}>
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} title={currentContent.title} highlights={currentContent.highlights} documentname={currentContent.documentname} doctitle={currentContent.doctitle} buynow={currentContent.buynow} />

                  <div className="Productinsidetab-container">
                    <div className="Productinsidetab-image-row">
                      {images.map((image, index) => (
                        <React.Fragment key={image.id}>
                          <div className="Productinsidetab-image-box">
                            <div className="Productinsidetab-image-wrapper">
                              <img src={image.src} alt={image.alt} />
                            </div>
                          </div>
                          {index < images.length - 1 && <div className="Productinsidetab-divider"></div>}
                        </React.Fragment>
                      ))}
                      <div className="Productinsidetab-divider"></div>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Incabin;
