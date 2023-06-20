import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from './components/ImageSlider';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

// import ImageSlider from './components/ImageSlider';

function App() {
  return (
	<Router>
    <div className="App">
		<Navbar></Navbar>
      <header className="App-header">
      </header>
      <div className="ImageSlider">
        <Gallery photos={photos} />
		  {/* <ImageSlider /> */}
      </div>
    </div>
	</Router>
  );
}

export default App;
