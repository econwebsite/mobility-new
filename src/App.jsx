import React,{useState} from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from "./Components/NavBarcomp/NavBar";
import TotalHomePage from "./Components/HomePagecomp/TotalHomePage";
import Footerpage from "./Components/FooterComp/Footerpage";
import TotalSurroundview from "./Components/Productcomp/SurroundviewProduct/TotalSurroundview";
import Totalforwardfacing from "./Components/Productcomp/ForwardfacingProduct/Totalforwardfacing";
import Totalincabin from "./Components/Productcomp/IncabinProduct/Totalmonitoring";
import Totalrearview from "./Components/Productcomp/Rearviewproduct/Totalrearview"
import ScrollToTop from "./Components/ScrollToTop"
import BlogHubpage from './Components/HubPageComp/BlogHubpage/BlogHubpage';
import Totalcontact from './Components/HomePagecomp/Homecontactus/Totalcontact';
import HdrLedBlog from "./Components/FutureBlog/HdrLedBlog"
import DrivermonBlog from "./Components/FutureBlog/DrivermonBlog"
import ForwardBlog from "./Components/FutureBlog/ForwardBlog"
import SurroundBlog from "./Components/FutureBlog/SurroundBlog"
import NotFoundPage from "./Components/Notfoundpage";
import TotalIndustries from './Components/Industriescomp/TotalIndustries';

import Fullcasestudy from './Components/HomePagecomp/Casestudycomp/CasestudyContent/MiningCasestudy';
import ProductCaseStudy from './Components/HomePagecomp/Casestudycomp/Casestudy';


const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => setShowPopup(false);

  return (

          <BrowserRouter 
          // basename="/mobility"
          >
                    <HelmetProvider>
          
              <ScrollToTop /> 

    <div className='fixed-container'>
      <NavBar/>

      <Routes>
        <Route path="/" element={<TotalHomePage />} />
        <Route path="/surround-view-cameras" element={<TotalSurroundview/>} />
        <Route path="/forward-facing-cameras" element={<Totalforwardfacing/>} />
        <Route path="/driver-monitoring-cameras" element={<Totalincabin/>} />
        <Route path="/rear-view-cameras" element={<Totalrearview/>} />
        <Route path="/contact-us" element={<Totalcontact/>} />
        <Route path="/blog" element={<BlogHubpage/>} />
        <Route path="/blog/why-hdr-lfm-matter-forward-facing-cameras-adas/" element={<HdrLedBlog/>} />
        <Route path="/blog/how-driver-monitoring-cameras-improve-safety-features/" element={<DrivermonBlog/>} />
        <Route path="/blog/how-forward-facing-camera-works-in-adas/" element={<ForwardBlog/>} />
        <Route path="/blog/how-surround-view-cameras-improve-driving-parking-safety/" element={<SurroundBlog/>} />
        <Route path="/case-study/rugged-multi-camera-setup-for-off-road-mining-vehicles" element={<Fullcasestudy/>} />
        <Route path="/case-study" element={<ProductCaseStudy/>} />

        <Route path="/industries" element={<TotalIndustries/>} />
        <Route path="/industries/:marketName?" element={<TotalIndustries />} />        
        <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Footerpage/>

        </div>
        </HelmetProvider>
        </BrowserRouter>


  );
}

export default App;
