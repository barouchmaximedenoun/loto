import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

class RCarousel extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    //const name = this.getAttribute('name');
    ReactDOM.render(
      <div>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </div>,
      mountPoint
    );
  }
}
customElements.define('r-carousel', RCarousel); 
/* const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
