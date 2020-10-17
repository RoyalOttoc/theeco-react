import React from 'react';
import './App.css';
import { SideBar } from "./components/SideBar/SideBar.component";
import Messages from "./components/Messages/Messages.component"
import Ads from "./components/Ads/Ads.component"


function App() {
  return (
    <div>
      <SideBar />
      <div style={{paddingLeft : '300px'}}>
        <Messages />
        <Ads />
      </div>
    </div>
  );
}

export default App;
