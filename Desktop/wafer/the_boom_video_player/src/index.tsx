import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// import React from 'react';
// import ReactDOM, { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { render } from 'react-dom';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const videoEmbedContainersFn = () => document.querySelectorAll("theboom-video-element") as unknown as Element[];
// const videoEmbedContainers = videoEmbedContainersFn();
// const roots = createRoot(document.querySelectorAll("theboom-video-element") as unknown  as HTMLElement);

// roots.map(({eachEmbed, ind}:any) => root.render(() => <App embededHTMLElement={videoEmbedContainers[ind]} />, eachEmbed));
// render(() => <App embededElement={videoEmbedContainer} />, root);
