import MarkerClusterGroup from 'react-leaflet-cluster';

import { useAppSelector } from '../../../../shared/model/hooks';
import { selectMarkers } from '../../model/slice';

import { CustomMarker } from '../CustomMarker';

const MarkerList = () => {
  const markers = useAppSelector(selectMarkers);

  return (
    <MarkerClusterGroup>
      {markers.map(({ position, id, serialNumber }) => (
        <CustomMarker
          key={id}
          position={position}
          id={id}
          serialNumber={serialNumber}
        />
      ))}
    </MarkerClusterGroup>
  );
};

export { MarkerList };
