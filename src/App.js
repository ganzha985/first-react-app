import React from 'react';
import m from "./App.module.css";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className={m.app_wrapper}>
      <Header/>    
      <Navbar/>
      <div className={m.app_wrapper_content}>
        <Profile/>
      </div>
      {/* <div className={m.app_wrapper_content}>
        <Dialogs/>
      </div> */}
    </div>
  );
}

export default App;
