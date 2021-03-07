import React from 'react';

//components

import HotelsTitle from "./HotelsTitle";
import HotelsCard from "./HotelsCard";

//constants


//images


//styles
import '../styles/comonents/App.css';

function App() {
  return (
    <div className='container'>
      <HotelsTitle></HotelsTitle>
      <div className='row'>
        <HotelsCard></HotelsCard>
      </div>
    </div>
  );
}

export default App;
