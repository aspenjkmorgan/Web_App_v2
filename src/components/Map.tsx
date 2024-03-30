import './Map.css';
import {APIProvider, Map} from '@vis.gl/react-google-maps';


const MyMap: React.FC = () => {
  return (
  <APIProvider apiKey={"AIzaSyA2_jVJIqQqtE8tPCce5OkM23SkuvCe-24"}>
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
