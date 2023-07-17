import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Poll from './Poll';
import Category from './Categories';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { unstable_createRoot } from 'react-dom';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { useDrag } from 'react-dnd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to DosVoces</h1>
        <p>
          Your social voting platform.
        </p>
        <div className="categories">
          <Category name="cat1" numberOfPolls={5} />
          <Category name="cat2" numberOfPolls={8} />
          <Category name="cat3" numberOfPolls={3} />
          {/* Add more categories as needed */}
        </div>
        <Poll 
          question="What's your favorite color?" 
          options={[
            { text: 'Red', votes: 10 },
            { text: 'Blue', votes: 20 },
            { text: 'Green', votes: 30 }
          ]}
        /> {/* Here is where we use the Poll component */}
      </header>
    </div>
    
  );
}

export default App;
