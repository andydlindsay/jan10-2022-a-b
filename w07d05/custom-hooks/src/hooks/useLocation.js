import {useState, useEffect} from 'react';

const useLocation = () => {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((navInfo) => {
      setCoords({
        lat: navInfo.coords.latitude,
        lon: navInfo.coords.longitude
      });
    });
  }, []);

  return coords;
};

export default useLocation;
