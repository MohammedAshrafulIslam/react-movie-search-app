import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SearchMovies from './SearchMovies'; 
import './style.css';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Main />  {/* Render the Main component instead of App */}
  </StrictMode>
);
