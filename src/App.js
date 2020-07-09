import React from 'react';
import Fly from './fly.js';

function App() {
  return(
    <div className='App'>
      {/* <h1>change</h1> */}
      <Fly flyQuote='bird'/>
      <hr/>
      <Fly flyQuote='baloon'/>
    </div>
  );
}

export default App;