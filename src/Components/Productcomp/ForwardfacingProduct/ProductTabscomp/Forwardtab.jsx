import React, { useState, useEffect } from "react";
import './Forwardtab.css';
import { useLocation } from 'react-router-dom';

import ProductTableData from "../Platformsupport/ProductTableData";
import STURDeCAM88 from "../../../../assets/allcameras/sturdecam88_cuoagx.png";
import STURDeCAM84 from "../../../../assets/allcameras/sturdecam84.jpg";
import Modelbutton from "../../../ButtonComp/Modelbutton";
import STURDeCAM31 from "../../../../assets/allcameras/sturdecam31.jpg"
import STURDeCAM34 from "../../../../assets/allcameras/sturdecam34.jpg"
import platform from "../../../../assets/Productpage/platformsupport/Platformsupport.jpg";
import nvidia from "../../../../assets/Productpage/platformsupport/nividia.jpg";
import npx from "../../../../assets/Productpage/platformsupport/npx.jpg";
import renesas from "../../../../assets/Productpage/platformsupport/renesas.jpg"
import texas from "../../../../assets/Productpage/platformsupport/texas.jpg"

const Forwardtab = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('4K GMSL2');
  const [selectedRightTab, setSelectedRightTab] = useState('LOWLIGHT');
const [initialLeftTab, setInitialLeftTab] = useState(null);
  const [initialRightTab, setInitialRightTab] = useState(null);
  const location = useLocation();

  const images = [
    { id: 1, src: [platform], alt: 'platform support' },
    { id: 2, src: [nvidia], alt: 'nvidia' },
    { id: 3, src: [npx], alt: "npx" },
    { id: 4, src: [renesas], alt: 'renasas' },
    { id: 5, src: [texas], alt: 'texas' }

  ];
  const rightTabs = {   
 'Supported Cameras': {
      tabs: ['CAMERA_MODEL_1', 'CAMERA_MODEL_2'],
      images: [],
      bgColor: '#f1f2f2',
      color: '#344ea1',
    },
    '4K GMSL2': {
      tabs: ['STURDeCAM88', 'STURDeCAM84'],
      content: {

        'STURDeCAM88': {
         tableData: [
            ["Sensor","OmniVision's&reg OX08B40"],
            ['Frame Rate', '8MP @ 30 fps'],
            ['Output Format', 'Uncompressed UYVY format'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '68.23°(H), 38.83°(V), 80.22°(D)'],
            ['Temperature', '-40°C to 85°C'],
            ['Certifications', 'FCC Part 15 Subpart B / CE (Basic Compliance to sell in the US and Europe)'],
            ['No of Cameras Supported', 'upto 8 cameras'],
           ['ISP', 'On-board high performance ISP'],
          ['Form factor', '42 x 42 mm'],
          ],
           highlights: [
            "Houses STURDeCAM88 - 8MP (4K) HDR camera module based on OX08B40, OmniVision's automotive grade image sensor.",
            "Plugs into NVIDIA® Jetson AGX Orin™ developer kits",
            "140dB High Dynamic Range (HDR) + LED Flicker Mitigation (LFM)",
            "GMSL2™ interface (Coaxial cable of upto 15m with FAKRA connector)",
            "On-board high performance ISP",
            "Multi camera synchronization support (up to 8 cameras)",
            "Dust and waterproof IP67-rated enclosure",
            "GMSL2 Health Monitoring (Patent Pending)"
           ],
          title: "STURDeCAM88 - 4K 140dB HDR GMSL2 Camera Module",
          documentname: "e-con-STURDeCAM88-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM88",
         buynow:"https://www.e-consystems.com/webstore-dst.asp#STURDeCAM88_CUOAGX",

        },
        'STURDeCAM84': {
         tableData: [
            ["Sensor","onsemi&reg AR0823AT"],
            ['Frame Rate', '8MP @ 30 fps'],
            ['Output Format', 'RAW 12-bit'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '140.1° (D) x 121.2°(H) x 67.2° (V)'],
            ['Temperature', '-40°C to 85°C'],
           ['ISP', 'On-board high performance ISP'],
          ['Form factor', '20.8mm x 20.8mm'],
          ],
           highlights: [
            "Houses AR0823AT Image Sensor from onsemi",
            "Super-exposure pixel technology",
            "150dB High Dynamic Range (HDR) + LFM",
            "GMSL2 interface to transmit power and data up to 15m",
            "Automotive grade IP69K-rated enclosure",
            "Compliant with Road vehicles and Automotive standards"
           ],
          title: "STURDeCAM84 - World's Tiniest 8MP Automotive Camera",
          documentname: "e-con-STURDeCAM84-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM84",
        },
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM88, STURDeCAM84],
    },
    
    '3MP GMSL2': {
      tabs: ['STURDeCAM31', 'STURDeCAM34'],
      content: {
        'STURDeCAM31': {
          tableData: [
            ['Sensor ','Sony&reg ISX031'],
            ['Frame Rate ', '3MP @ 60 fps'],
            ['Output Format ', 'UYVY'],
            ['Interface ', 'GMSL2&trade;'],
            ['FOV ', '54.04°(H), 42.86°(V), 70.17°(D) '],
            ['Temperature ', '-40°C to 85°C'],
            ['Certifications ', 'ISO 16750-3 & ISO 16750-4 (Shock and Vibration)'],
            ['No of Cameras Supported ', 'upto 8 cameras'],
           ['ISP ', 'On-board high performance ISP'],
          ['Form factor ', '25 x 25 mm'],
          ],
          highlights: [
            "Houses STURDeCAM31 - HDR camera module based on Sony® ISX031 sensor incorporating sub-pixel technology",
            "Low-light 120dB HDR without Motion artifacts",
            "LED Flicker Mitigation (LFM)",
            "GMSL2 interface (Coaxial cable of upto 15m with FAKRA connector)",
            "Synchronized multi-camera solution (upto 4 cameras - 3MP @60fps, upto 8 cameras - 3MP @30fps)",
            "IP69K-rated camera designed for autonomous mobility",
            "Ensures resilient camera streaming by monitoring sensor, MCU, and GMSL link health"
          ],
          title: "STURDeCAM31 - 3MP Sony® ISX031 120dB HDR Camera for Autonomous Mobility",
          documentname: "e-con-STURDeCAM31-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM31",
          buynow:"https://www.e-consystems.com/webstore-dst.asp#STURDeCAM31",

        },
        'STURDeCAM34': {
         tableData: [
            ['Sensor','onsemi&reg AR0341AT'],
            ['Frame Rate', '3MP @ 60 fps'],
            ['Output Format', 'UYVY'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '64.62° (H), 51.28° (V), 83.5° (D)'],
            ['Temperature', '-40°C to 85°C'],
            ['Certifications', 'CISPR-25 + ISO 11452-2/4 (Automotive EMC std)'],
            ['No of Cameras Supported', 'upto 8 cameras'],
           ['ISP', 'On-board high performance ISP'],
          ['Form factor', '25 x 25 mm'],
          ],
          highlights: [
          "Houses AR0341AT Image Sensor from onsemi&reg;",
          "Super-exposure pixel technology",
          "Camera provides upto 140dB High Dynamic Range (Supports upto 150dB HDR via raw data output)",
          "Exceptional LED Flicker Mitigation (LFM)",
          "Patented hot-pluggable GMSL support*",
          "GMSL2™ interface to transmit power and data up to 15m",
          "IP69K-rated enclosure",
          "Ensures resilient camera streaming by monitoring sensor, ISP and GMSL link health"
          ],

          title: "STURDeCAM34 - 3MP AR0341AT 140dB HDR Camera Module",
          documentname: "e-con-STURDeCAM34-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM34",
         buynow:"https://www.e-consystems.com/webstore-dst.asp#STURDeCAM34_CUOAGX",

        }
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM31, STURDeCAM34],
    },
    


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
    <div className="ForwardTabs-Total">
      <div className='mainContainer'>
        <div className="ForwardTabs-newcontainpro">
          <div className="ForwardTabs-Container">
            <div className="ForwardTabs-LeftSide">
              {Object.keys(rightTabs).map((heading, index) => (
                <div
                  key={index}
                  className={`ForwardTabs-LeftHeading ${heading === 'Supported Cameras' ? 'camera' : ''} ${selectedLeftTab === heading ? 'active' : ''}`}
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

            <div className="ForwardTabs-RightSide">
              {rightTabs[selectedLeftTab].tabs && (
                <div className="ForwardTabs-RightTabBox">
                  {rightTabs[selectedLeftTab].tabs.map((rightTab, index) => (
                    <div
                      key={index}
                      className={`ForwardTabs-RightTab ${selectedRightTab === rightTab ? 'active' : ''}`}
                      onClick={() => handleRightTabClick(rightTab)}
                    >
                      {rightTab}
                    </div>
                  ))}
                </div>
              )}

              {selectedRightTab && currentContent && (
                <div className="ForwardTabs-ContentBox">
                  <ProductTableData tableData={currentContent.tableData} imageSrc={currentImage} productName={selectedRightTab} title={currentContent.title}  highlights={currentContent.highlights} documentname={currentContent.documentname} doctitle={currentContent.doctitle} buynow={currentContent.buynow}/>
                  <div className="Forwardinsidetab-container">
                    <div className="Forwardinsidetab-image-row">
                      {images.map((image, index) => (
                        <React.Fragment key={image.id}>
                          <div className="Forwardinsidetab-image-box">
                            <div className="Forwardinsidetab-image-wrapper">
                              <img src={image.src} alt={image.alt} />
                            </div>
                          </div>
                          {index < images.length - 1 && <div className="Forwardinsidetab-divider"></div>}
                        </React.Fragment>
                      ))}
                      <div className="Forwardinsidetab-divider"></div>
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

export default Forwardtab;

