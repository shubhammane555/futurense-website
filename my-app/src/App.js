import HomePageSection1 from './components/HomePageSection1';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';

import './App.css';
import HomepageSection2 from './components/HomepageSection2';
import HomePageScetion3 from './components/HomePageScetion3';
import HomePageSection4 from './components/HomePageSection4';
import Patner from './components/Patner.js';
import EnquiryForm from './components/enquiryForm';


function App() {
  return (
    <div className="App">
    
      <NavbarComp/>
      <HomePageSection1/>
      <HomepageSection2/>
      <HomePageScetion3/>
      <HomePageSection4/>
      <Patner/>
    <EnquiryForm/>
      
<Footer/>

    </div>
  );
}

export default App;
