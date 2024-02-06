import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IMarker } from './types';

type TMarkerSlice = {
  markers: IMarker[];
};

const initialState: TMarkerSlice = {
  markers: [],
};

export const markersSlice = createSlice({
  name: 'marker',
  initialState,
  reducers: {
    addMarkers: (state, action: PayloadAction<IMarker>) => {
      state.markers.push(action.payload);
    },
    deleteMarker: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.markers = state.markers.filter(({ id }) => id !== action.payload);
    },
    updateMarker: (state, action: PayloadAction<[number, number, string]>) => {
      const [lat, lng, id] = action.payload;

      // prettier-ignore
      // eslint-disable-next-line no-param-reassign
      state.markers = state.markers.map(marker => (marker.id === id
        ? { ...marker, position: [lat, lng] }
        : marker));
    },
    deleteAllMarkers: state => {
      // eslint-disable-next-line no-param-reassign
      state.markers = [];
    },
  },
});

export const selectMarkers = (state: RootState) => state.marker.markers;

// prettier-ignore
export const {
  addMarkers,
  updateMarker,
  deleteMarker,
  deleteAllMarkers,
} = markersSlice.actions;
