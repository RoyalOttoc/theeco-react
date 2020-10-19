import React from 'react';
import './App.css';
import { SideBar } from "./components/SideBar/SideBar.component";
import Messages from "./components/Messages/Messages.component"
import Ads from "./components/Ads/Ads.component"
import Footer from "./components/Footer/footer.component"


function App() {
  return (
    <div>
      <SideBar />
      <div style={{paddingLeft : '300px'}}>
        <Messages />
        <Ads />
        <Footer />
      </div>
    </div>
  );
}

export default App;
