import { v4 as getRandomId } from 'uuid';

import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { LeafletMouseEvent } from 'leaflet';

import { MarkerList } from '../MarkerList';
import { DeleteAll } from '../DeleteAll';
import { useAppDispatch, useAppSelector } from '../../../../shared/model/hooks';
import { addMarkers, selectMarkers } from '../../model/slice';
import { MapEvent } from '../../lib/MapEvent';

import 'leaflet/dist/leaflet.css';

const Map = () => {
  const markers = useAppSelector(selectMarkers);
  const dispatch = useAppDispatch();

  const handleAddMarker = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;

    const newMarker = {
      id: getRandomId(),
      serialNumber: markers.length + 1,
      position: [lat, lng] as [number, number],
    };

    dispatch(addMarkers(newMarker));
  };

  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom>
        <TileLayer
          attribution='&copy;
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
          contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerList />
        <MapEvent handleAddMarker={handleAddMarker} />
      </MapContainer>
      {Boolean(markers.length) && <DeleteAll />}
    </>
  );
};

export { Map };
