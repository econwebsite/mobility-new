import React, { useState, useEffect } from "react";
import './ProductTab.css';
import ProductTableData from "../Platformsupport/ProductTableData";
import Modelbutton from "../../../ButtonComp/Modelbutton";
import { useLocation } from 'react-router-dom';

import STURDeCAM31 from "../../../../assets/allcameras/sturdecam31.jpg"
import STURDeCAM34 from "../../../../assets/allcameras/sturdecam34.jpg"
import STURDeCAM84 from "../../../../assets/allcameras/sturdecam84.jpg"
import STURDeCAM88 from "../../../../assets/allcameras/sturdecam88_cuoagx.png"
import routecam22 from "../../../../assets/allcameras/routeecamcu22.jpg"

import platform from "../../../../assets/Productpage/platformsupport/Platformsupport.jpg";
import nvidia from "../../../../assets/Productpage/platformsupport/nividia.jpg";
import npx from "../../../../assets/Productpage/platformsupport/npx.jpg";
import renesas from "../../../../assets/Productpage/platformsupport/renesas.jpg"

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


const Producttab = () => {
  const [selectedLeftTab, setSelectedLeftTab] = useState('All Cameras');
  const [selectedRightTab, setSelectedRightTab] = useState('STURDeCAM31');
  const [initialLeftTab, setInitialLeftTab] = useState(null);
  const [initialRightTab, setInitialRightTab] = useState(null);
  const location = useLocation();
const windowSize = useWindowSize();

  const images = [
    { id: 1, src: [platform], alt: 'platform support' },
    { id: 2, src: [nvidia], alt: 'nvidia' },
    { id: 3, src: [npx], alt: "npx" },
    { id: 4, src: [renesas], alt: 'renasas' }
  ];
  const rightTabs = {
    'Supported Cameras': {
      tabs: ['CAMERA_MODEL_1', 'CAMERA_MODEL_2'],
      images: [],
      bgColor: '#f1f2f2',
      color: '#344ea1',
    },
    'All Cameras': {
      tabs: ['STURDeCAM31', 'STURDeCAM34', 'STURDeCAM88', 'STURDeCAM84', 'RouteCAM_CU22'],
      content: {
        'STURDeCAM31': {
          tableData: [
            ['Sensor ', 'Sony&reg; ISX031'],
            ['Frame Rate ', '3MP @ 60 fps'],
            ['Output Format ', 'UYVY'],
            ['Interface ', 'GMSL2&trade;'],
            ['FOV ', '54.04°(H), 42.86°(V), 70.17°(D) '],
            ['Temperature ', '-40°C to 85°C'],
          ['No of Cameras Supported ', 'upto 8 cameras'],
            ['ISP ', 'On-board high performance ISP'],
            ['Form factor ', '25 x 25 mm'],
            ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],  
          ],
          highlights: [
            "HDR camera module based on Sony® ISX031 sensor incorporating sub-pixel technology",
            "Low-light 120dB HDR without Motion artifacts",
            "LED Flicker Mitigation (LFM)",
            "GMSL2 interface (Coaxial cable of upto 15m)",
            "Synchronized multi-camera solution",
            "IP69K-rated camera designed for autonomous mobility",
            "Ensures resilient camera streaming by monitoring sensor, MCU, and GMSL link health"
          ],
          title: "STURDeCAM31 - 3MP 120dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM31-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM31",
          buynow: "https://www.e-consystems.com/webstore-dst.asp#STURDeCAM31",
        },
        'STURDeCAM34': {
          tableData: [
            ['Sensor', 'onsemi&reg; AR0341AT'],
            ['Frame Rate', '3MP @ 60 fps'],
            ['Output Format', 'UYVY'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '64.62° (H), 51.28° (V), 83.5° (D)'],
            ['Temperature', '-40°C to 85°C'],
            ['No of Cameras Supported', 'upto 8 cameras'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '25 x 25 mm'],
                 ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],  
          ],
          highlights: [
            'Houses AR0341AT Image Sensor from onsemi&reg;',
            "Super-exposure pixel technology",
            "Camera provides upto 140dB High Dynamic Range (Supports upto 150dB HDR via raw data output)",
            "Exceptional LED Flicker Mitigation (LFM)",
            "Patented hot-pluggable GMSL support",
            "GMSL2™ interface to transmit power and data up to 15m",
            "IP69K-rated enclosure",
            "Ensures resilient camera streaming by monitoring sensor, ISP and GMSL link health"
          ],
          title: "STURDeCAM34 - 3MP 140dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM34-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM34",
          buynow: "https://www.e-consystems.com/webstore-dst.asp#STURDeCAM34_CUOAGX",
        },
       
        
        'STURDeCAM88': {
          tableData: [
            ['Sensor', "OmniVision's&reg; OX08B40"],
            ['Frame Rate', '8MP @ 30 fps'],
            ['Output Format', 'Uncompressed UYVY format'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '68.23°(H), 38.83°(V), 80.22°(D)'],
            ['Temperature', '-40°C to 85°C'],
            ['No of Cameras Supported', 'upto 8 cameras'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '42 x 42 mm'],
                 ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],  
          ],
          highlights: [
            "8MP (4K) HDR camera module based on OX08B40, OmniVision's automotive grade image sensor.",
            "140dB High Dynamic Range (HDR) + LED Flicker Mitigation (LFM)",
            "GMSL2™ interface (Coaxial cable of upto 15m)",
            "On-board high performance ISP",
            "Multi camera synchronization support (up to 8 cameras)",
            "Dust and waterproof IP67-rated enclosure",
            "GMSL2 Health Monitoring (Patent Pending)"
          ],
          title: "STURDeCAM88 - 4K 140dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM88-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM88",
          buynow: "https://www.e-consystems.com/webstore-dst.asp#STURDeCAM88_CUOAGX",
        },
        'STURDeCAM84': {
          tableData: [
            ['Sensor', 'onsemi&reg; AR0823AT'],
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
         'RouteCAM_CU22': {
          tableData: [
            ['Sensor', 'Sony&reg; STARVIS™ IMX662'],
            ['Frame Rate', 'Full HD @ 60 fps'],
            ['Output Format', 'Compressed MJPEG, H.265 and H.264 formats'],
            ['Interface', 'GigE'],
            ['FOV', '151.74°(D), 130°(H), 70.75°(V)'],
            ['Temperature', '-30°C to 70°C'],
            ['Form factor', '46mm x 46mm'],
          ],
          highlights: [
            "Power-over-Ethernet (PoE) camera",
            "Houses Sony Starvis 2 IMX662 Ultra Low-light Image Sensor",
            "High Dynamic Range",
            "Low Latency upto 75ms",
            "PTP Network Time Synchronization",
            "IP67-Rated Enclosure",
            "Compatible with CloVis Central™ - Device Management Platform "
          ],
          title: "RouteCAM_CU22_IP67 - Lowlight HDR GigE Camera",
          documentname: "e-con-RouteCAM_CU22_IP67-technical-documents.zip",
          doctitle: "Technical documents for RouteCAM_CU22",
        },
        
      },
  bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM31,STURDeCAM34,STURDeCAM88,STURDeCAM84,routecam22]
    },
    '3MP GMSL2': {
      tabs: ['STURDeCAM31', 'STURDeCAM34'],
       content: {
        'STURDeCAM31': {
          tableData: [
            ['Sensor ', 'Sony&reg; ISX031'],
            ['Frame Rate ', '3MP @ 60 fps'],
            ['Output Format ', 'UYVY'],
            ['Interface ', 'GMSL2&trade;'],
            ['FOV ', '54.04°(H), 42.86°(V), 70.17°(D) '],
            ['Temperature ', '-40°C to 85°C'],
            ['No of Cameras Supported ', 'upto 8 cameras'],
            ['ISP ', 'On-board high performance ISP'],
            ['Form factor ', '25 x 25 mm'],
                 ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],  
          ],
          highlights: [
            "HDR camera module based on Sony® ISX031 sensor incorporating sub-pixel technology",
            "Low-light 120dB HDR without Motion artifacts",
            "LED Flicker Mitigation (LFM)",
            "GMSL2 interface (Coaxial cable of upto 15m)",
            "Synchronized multi-camera solution",
            "IP69K-rated camera designed for autonomous mobility",
            "Ensures resilient camera streaming by monitoring sensor, MCU, and GMSL link health"
          ],
          title: "STURDeCAM31 - 3MP 120dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM31-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM31",
          buynow: "https://www.e-consystems.com/webstore-dst.asp#STURDeCAM31",
        },

       'STURDeCAM34': {
          tableData: [
            ['Sensor', 'onsemi&reg; AR0341AT'],
            ['Frame Rate', '3MP @ 60 fps'],
            ['Output Format', 'UYVY'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '64.62° (H), 51.28° (V), 83.5° (D)'],
            ['Temperature', '-40°C to 85°C'],
            ['No of Cameras Supported', 'upto 8 cameras'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '25 x 25 mm'],
                 ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],  
          ],
          highlights: [
            'Houses AR0341AT Image Sensor from onsemi&reg;',
            "Super-exposure pixel technology",
            "Camera provides upto 140dB High Dynamic Range (Supports upto 150dB HDR via raw data output)",
            "Exceptional LED Flicker Mitigation (LFM)",
            "Patented hot-pluggable GMSL support",
            "GMSL2™ interface to transmit power and data up to 15m",
            "IP69K-rated enclosure",
            "Ensures resilient camera streaming by monitoring sensor, ISP and GMSL link health"
          ],
          title: "STURDeCAM34 - 3MP 140dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM34-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM34",
          buynow: "https://www.e-consystems.com/webstore-dst.asp#STURDeCAM34_CUOAGX",
        },
       
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [STURDeCAM31, STURDeCAM34],
    },
    '4K GMSL2': {
      tabs: ['STURDeCAM88', 'STURDeCAM84'],
      content: {

        'STURDeCAM88': {
          tableData: [
            ['Sensor', "OmniVision's&reg; OX08B40"],
            ['Frame Rate', '8MP @ 30 fps'],
            ['Output Format', 'Uncompressed UYVY format'],
            ['Interface', 'GMSL2&trade;'],
            ['FOV', '68.23°(H), 38.83°(V), 80.22°(D)'],
            ['Temperature', '-40°C to 85°C'],
            ['No of Cameras Supported', 'upto 8 cameras'],
            ['ISP', 'On-board high performance ISP'],
            ['Form factor', '42 x 42 mm'],
                 ['Certifications ', `
  <div style="margin-bottom: 10px;">ISO 16750-3 & ISO 16750-4 (Shock and Vibration)</div>
  <div style="margin-bottom: 10px;">CISPR-25 + ISO 11452-2/4 (Automotive EMC std)</div>
  <div>FCC Part 15 Subpart B/CE (Basic Compliance to sell in the US and Europe)</div>
`],  
          ],
          highlights: [
            "8MP (4K) HDR camera module based on OX08B40, OmniVision's automotive grade image sensor.",
            "140dB High Dynamic Range (HDR) + LED Flicker Mitigation (LFM)",
            "GMSL2™ interface (Coaxial cable of upto 15m)",
            "On-board high performance ISP",
            "Multi camera synchronization support (up to 8 cameras)",
            "Dust and waterproof IP67-rated enclosure",
            "GMSL2 Health Monitoring (Patent Pending)"
          ],
          title: "STURDeCAM88 - 4K 140dB HDR GMSL2 Camera",
          documentname: "e-con-STURDeCAM88-technical-documents.zip",
          doctitle: "Technical documents for STURDeCAM88",
          buynow: "https://www.e-consystems.com/webstore-dst.asp#STURDeCAM88_CUOAGX",
        },
'STURDeCAM84': {
          tableData: [
            ['Sensor', 'onsemi&reg; AR0823AT'],
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
    'POE/GigE': {
      tabs: ['RouteCAM_CU22',],
      content: {
       'RouteCAM_CU22': {
          tableData: [
            ['Sensor', 'Sony&reg; STARVIS™ IMX662'],
            ['Frame Rate', 'Full HD @ 60 fps'],
            ['Output Format', 'Compressed MJPEG, H.265 and H.264 formats'],
            ['Interface', 'GigE'],
            ['FOV', '151.74°(D), 130°(H), 70.75°(V)'],
            ['Temperature', '-30°C to 70°C'],
            ['Form factor', '46mm x 46mm'],
          ],
          highlights: [
            "Power-over-Ethernet (PoE) camera",
            "Houses Sony Starvis 2 IMX662 Ultra Low-light Image Sensor",
            "High Dynamic Range",
            "Low Latency upto 75ms",
            "PTP Network Time Synchronization",
            "IP67-Rated Enclosure",
            "Compatible with CloVis Central™ - Device Management Platform "
          ],
          title: "RouteCAM_CU22_IP67 - Lowlight HDR GigE Camera",
          documentname: "e-con-RouteCAM_CU22_IP67-technical-documents.zip",
          doctitle: "Technical documents for RouteCAM_CU22",
        },
        
      },
      bgColor: 'white',
      color: '#344ea1',
      images: [routecam22],
    }
  };

  
  useEffect(() => {
      const hash = window.location.hash?.replace("#", "");
      if (hash) {
        for (const leftTab in rightTabs) {
          if (rightTabs[leftTab]?.tabs?.includes(hash)) {
            setSelectedLeftTab(leftTab);
            setSelectedRightTab(hash);
            break;
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
      setSelectedLeftTab(tab);
      setSelectedRightTab(rightTabs[tab].tabs[0]);
    };
  
    const handleRightTabClick = (tab) => {
      setSelectedRightTab(tab);
    };
  
    const currentContent =
      rightTabs[selectedLeftTab]?.content?.[selectedRightTab] || null;
  
    const currentImage =
      rightTabs[selectedLeftTab]?.images?.[
        rightTabs[selectedLeftTab].tabs.indexOf(selectedRightTab)
      ] || null;

  return (
    <div className="ProductTabs-Total">
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

export default Producttab;
