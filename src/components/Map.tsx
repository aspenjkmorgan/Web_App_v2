import './Map.css';
import {APIProvider, Map} from '@vis.gl/react-google-maps';


const MyMap: React.FC = () => {
  return (
  <APIProvider apiKey={"AIzaSyDu4rN5ybFN35yY-0Atsi_7CbOaUshoU-8"}>
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
