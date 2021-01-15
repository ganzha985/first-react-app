import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import m from "./App.module.css";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={m.app_wrapper}>
        <Header />
        <Navbar />
        <div className={m.app_wrapper_content}>
          <Route postData={props.postData} path="/profile" render={() => <Profile postData={props.postData}/>}/>
          <Route path="/dialogs" render={ () => <Dialogs dialogInfo={props.dialogInfo} messagesData={props.messagesData}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
