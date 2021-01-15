import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: 'first post' , likesCount: 12},
  { id: 2, message: 'second post' , likesCount: 12},
  { id: 3, message: 'third post' , likesCount: 12},
  { id: 4, message: 'hihihihi' , likesCount: 12},
]

let dialogInfo = [
  {id: 1, name: 'Dima1'},
  {id: 2, name: 'Dima2'},
  {id: 3, name: 'Dima3'},
  {id: 4, name: 'Dima4'},
] 

let messagesData = [
  {id: 1, message: 'hi2'},
  {id: 2, message: 'hi2'},
  {id: 3, message: 'hi2'},
  {id: 4, message: 'hi2'},
] 

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogInfo={dialogInfo} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
