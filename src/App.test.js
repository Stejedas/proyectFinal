import { render, screen } from '@testing-library/react';
import App from './App';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoidGVqZWRhcyIsImEiOiJjbDE3dHc4cDQwN2poM2ptbTN2ZDRrZGFoIn0.hrVrqsR4vHmUWS8uhIWW7w';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
