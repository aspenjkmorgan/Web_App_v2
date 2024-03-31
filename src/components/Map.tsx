import './Map.css';
import {APIProvider, Map} from '@vis.gl/react-google-maps';


const MyMap: React.FC = () => {
  const apiKey:string = process.env.REACT_APP_API_KEY!;
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
