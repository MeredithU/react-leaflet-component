import React from 'react';
import ReactDOM from 'react-dom';
import LeafletMap from './components/LeafletMap.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Leaflet Map</h1>
        <LeafletMap position={[47.6204, -122.3491]} zoom={14} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));