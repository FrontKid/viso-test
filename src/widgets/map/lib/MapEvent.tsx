import { LeafletMouseEvent } from 'leaflet';
import { useMapEvent } from 'react-leaflet/hooks';

type TMapEvent = {
  handleAddMarker: (event: LeafletMouseEvent) => void;
};

const MapEvent = (props: TMapEvent) => {
  useMapEvent('click', props.handleAddMarker);

  return null;
};

export { MapEvent };
