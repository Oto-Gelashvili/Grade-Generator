import React, { useState } from 'react';
import FormComponent from './FormComponent';
import './App.css';

function App() {
  const [isGeorgian, setIsGeorgian] = useState(true);

  const toggleLanguage = () => {
    setIsGeorgian((prevIsGeorgian) => !prevIsGeorgian);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            isGeorgian
              ? process.env.PUBLIC_URL + '/logo-bga.png'
              : process.env.PUBLIC_URL + '/logo.svg'
          }
          alt={'school logo'}
        />
        <h1>{isGeorgian ? 'შეფასების გენერატორი' : 'Rate Generator '}</h1>
        <h3 className="switch" onClick={toggleLanguage}>
          {isGeorgian ? 'ENG' : 'ქარ'}
        </h3>
      </header>
      <main>
        <FormComponent isGeorgian={isGeorgian} />
      </main>
    </div>
  );
}

export default App;
