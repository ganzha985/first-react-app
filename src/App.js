import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import m from "./App.module.css";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className={m.app_wrapper}>
        <Header />
        <Navbar />
        <div className={m.app_wrapper_content}>
          <Route path="/profile" component={Profile}/>
          <Route path="/dialogs" component={Dialogs}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
