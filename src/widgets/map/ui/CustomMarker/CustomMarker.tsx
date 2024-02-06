import { FC } from 'react';
import { DragEndEvent, Icon } from 'leaflet';
import Button from '@mui/material/Button/Button';

import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';

import { deleteMarker, updateMarker } from '../../model/slice';

import { useAppDispatch } from '../../../../shared/model/hooks';

import { sliceStrTo } from '../../../../shared/lib/sliceString';

import icon from '../images/icon.png';

import css from './CustomMarker.module.scss';

type TCustomMarkerProps = {
  id: string;
  position: [number, number];
  serialNumber: number;
};

const newIcon = new Icon({
  iconUrl: icon,
  iconSize: [40, 40],
});

const SLICE_POSITION_COUNT = 4;

const CustomMarker: FC<TCustomMarkerProps> = ({
  id,
  position,
  serialNumber,
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteMarker = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(deleteMarker(id));
  };

  const handleMarkerDrugEnd = (e: DragEndEvent) => {
    const { lat, lng } = e.target.getLatLng();

    dispatch(updateMarker([lat, lng, id]));
  };

  return (
    <Marker
      position={position}
      icon={newIcon}
      draggable
      eventHandlers={{
        dragend: (e: DragEndEvent) => handleMarkerDrugEnd(e),
      }}
    >
      <Popup>
        <div className={css.popup}>
          <h3>{`Serial number: ${serialNumber}`}</h3>

          <span className={css.coord}>
            {`latitude: ${sliceStrTo(position[0], SLICE_POSITION_COUNT)}`}
          </span>
          <span className={css.coord}>
            {`longitude: ${sliceStrTo(position[1], SLICE_POSITION_COUNT)}`}
          </span>

          <Button
            variant="outlined"
            color="error"
            onClick={e => handleDeleteMarker(e)}
          >
            delete marker
          </Button>
        </div>
      </Popup>
    </Marker>
  );
};

export { CustomMarker };
