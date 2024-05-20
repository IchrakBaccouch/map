import React, { useEffect } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const App = () => {
  useEffect(() => {
    // Add your Google Maps API key here
    const googleApiKey = 'YOUR_API_KEY';
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`;
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <Jumbotron fluid className="mb-0">
        <Container>
          <h1>Welcome to Our Amazing App</h1>
          <p>Discover the World with Google Maps!</p>
        </Container>
      </Jumbotron>
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center (San Francisco)
          defaultZoom={10} // Default zoom level
        >
          <AnyReactComponent
            lat={37.7749}
            lng={-122.4194}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default App;