import React, { useState, useEffect } from "react";
import './Incabin.css';
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

const Incabin = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('eDACAM');
  const [selectedRightTab, setSelectedRightTab] = useState('LOWLIGHT');
const [initialLeftTab, setInitialLeftTab] = useState(null);
  const [initialRightTab, setInitialRightTab] = useState(null);
  const location = useLocation();

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
    'eDACAM': {
      tabs: ['eDACAM27', 'eDACAM29'],
      content: {
        'eDACAM27': {
          tableData: [
            ['OMNIVISION™ OV2312', '2MP @ 60 fps'],
            ['In-Built ISP', 'Chroma: RGB-IR'],
            ['NIR Sensitivity: 940 nm / 850 nm ', 'Global Shutter'],
            ['GMSL2 Interface', 'Output Format: UYVY'],
            ['Form factor: 42mm x 42mm', 'FOV: 75°(H), 62°(V), 88°(D)'],
            ['IP Rating (Optional)', 'Compliance & Standards :<br>ISO 11452'],
          ],
          title: "eDACAM27 - 2MP OV2312 Global Shutter Camera with 15m cable support",
          documentname: "eSTURDeCAM27-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM27"
        },
        'eDACAM29': {
          tableData: [
            ['OMNIVISION™ OV2311', '2MP @ 60 fps'],
            ['Without ISP', 'Monochrome'],
            ['NIR Sensitivity: 940 nm / 850 nm ', 'Global Shutter'],
            ['GMSL2 Interface', 'Output Format: Y8'],
            ['Form factor:42mm x 42mm', 'FOV: 57°(H), 44°(V), 70°(D)'],
            ['IP Rating (Optional)', 'Compliance & Standards :<br>ISO 16750'],
          ],
          title: "eDACAM29 - 2MP OV2311 Global Shutter Camera with 15m cable support",
          documentname: "e-con-STURDeCAM29-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM29"
        },
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM27, STURDeCAM29],
    }
  };
  
const handleLeftTabClick = (tab) => {
    if (tab !== 'Supported Cameras') {
      setSelectedLeftTab(tab);
      setSelectedRightTab(rightTabs[tab].tabs[0]);
    }
  };

  const handleRightTabClick = (tab) => {
    setSelectedRightTab(tab);
  };
  useEffect(() => {
    if (location.state?.leftTab) {
      setInitialLeftTab(location.state.leftTab);
    }
    if (location.state?.rightTab) {
      setInitialRightTab(location.state.rightTab);
    }
  }, [location.state]);

  useEffect(() => {
    if (initialLeftTab) {
      setSelectedLeftTab(initialLeftTab);
    }
  }, [initialLeftTab]);

  useEffect(() => {
    if (initialRightTab && rightTabs[selectedLeftTab]?.tabs.includes(initialRightTab)) {
      setSelectedRightTab(initialRightTab);
    } else if (rightTabs[selectedLeftTab]) {
      setSelectedRightTab(rightTabs[selectedLeftTab].tabs[0]);
    }
  }, [selectedLeftTab, initialRightTab]);



  const currentContent = rightTabs[selectedLeftTab]?.content[selectedRightTab];
  const currentImage = rightTabs[selectedLeftTab]?.images?.[rightTabs[selectedLeftTab].tabs.indexOf(selectedRightTab)];

  return (
    <div className="DriverTab-Total">
      <div className='mainContainer'>
        <div className="DriverTab-newcontainpro">
          <div className="DriverTab-Container">
            <div className="DriverTab-LeftSide">
              {Object.keys(rightTabs).map((heading, index) => (
                <div
                  key={index}
                  className={`DriverTab-LeftHeading ${heading === 'Supported Cameras' ? 'camera' : ''} ${selectedLeftTab === heading ? 'active' : ''}`}
                  onClick={() => handleLeftTabClick(heading)}
                  style={{
                    backgroundColor: rightTabs[heading].bgColor,
                    color: rightTabs[heading].color,
                    borderColor: selectedLeftTab === heading ? '#f1f2f2' : '#344ea1',
                    cursor: heading === 'Supported Cameras' ? 'default' : 'pointer',
                  }}
                >
                  {heading}
                </div>
              ))}
            </div>

            <div className="DriverTab-RightSide">
              {rightTabs[selectedLeftTab].tabs && (
                <div className="DriverTab-RightTabBox">
                  {rightTabs[selectedLeftTab].tabs.map((rightTab, index) => (
                    <div
                      key={index}
                      className={`DriverTab-RightTab ${selectedRightTab === rightTab ? 'active' : ''}`}
                      onClick={() => handleRightTabClick(rightTab)}
                    >
                      {rightTab}
                    </div>
                  ))}
                </div>
              )}

              {selectedRightTab && currentContent && (
                <div className="DriverTab-ContentBox">
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} title={currentContent.title} documentname={currentContent.documentname} doctitle={currentContent.doctitle}/>

                  <div className="DriverTab-insidetab-container">
                    <div className="DriverTab-insidetab-image-row">
                      {images.map((image, index) => (
                        <React.Fragment key={image.id}>
                          <div className="DriverTab-insidetab-image-box">
                            <div className="DriverTab-insidetab-image-wrapper">
                              <img src={image.src} alt={image.alt} />
                            </div>
                          </div>
                          {index < images.length - 1 && <div className="DriverTab-insidetab-divider"></div>}
                        </React.Fragment>
                      ))}
                      <div className="DriverTab-insidetab-divider"></div>
                    
                    </div>
                  </div>    
                  <div className="ProductTabs-total-Button">
                  <Modelbutton className="ProductTabs-Button"  backgroundColor="#00aeef"  type="Contact Us"  animationColor="#344ea1" hoverColor="#344ea1" />
                  {/* <Modelbutton text="Download Tech document" backgroundColor="#00aeef" textColor="#131b2d"  hoverTextColor="#344ea1" className="ProductTabs-Button" to="" productName="ProductDocument" docName={currentContent.documentname} title={currentContent.doctitle}/> */}

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
