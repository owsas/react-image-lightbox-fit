import React from 'react';
import { render } from 'react-dom';
import Index from '../src/index';

function getImage() {
  const width = 100 * (Math.floor(Math.random() * 6) + 4);
  const height = 100 * (Math.floor(Math.random() * 6) + 4);

  return `https://dummyimage.com/${width}x${height}`;
}


const images = [
  getImage(),
  getImage(),
  getImage(),
  getImage(),
  getImage(),
  getImage(),
  getImage(),
  getImage(),
  getImage(),
  getImage(),
];


const App = () => (
  <div>
    <div className="visible-xs visible-sm">
      <Index images={images} height={400} />
    </div>
    <div className="container">

      <div className="row">
        <div className="col-md-9 hidden-xs hidden-sm">
          <Index images={images} height={400} />
        </div>
        <div className="col-md-3">
          <h1>Hello world</h1>
          <p>This is a test paragraph</p>
        </div>
      </div>
    </div>
  </div>

);

render(<App />, document.getElementById('root'));
