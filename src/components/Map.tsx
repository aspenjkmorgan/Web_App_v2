import './Map.css';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { apiSnap } from '../firebaseConfig';
const apiKey = apiSnap.get('key');

const MyMap: React.FC = () => {
  return (
  <APIProvider apiKey={apiKey}>
    <Map
      className='map'
      defaultZoom={7}
      defaultCenter={{lat: 46.84, lng: -110.83}}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
  );
};
export default MyMap;
