import './typedef';
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { createMockMarker } from './utils';

/**
 * @type InitialState
 */
const mockMarkers = Array(500).fill(null).map((_, index) => ({ ...createMockMarker(), id: index }))
const initialState = {
  markers: mockMarkers,
  mapConfig: {
    markerScale: 0.5,
    markerTextScale: 1,
  },
  comments: [{ id: new Date().getTime(), content: '쾌유를 빕니다' }],
  commentInput: '', 
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addMarker: (state, action) => {
      state.markers = [...state.markers, action.payload.marker];
    },
    setMarkerScale: (state, action) => {
      state.mapConfig.markerScale = action.payload.markerScale;
    },
    setMarkerTextScale: (state, action) => {  
      state.mapConfig.markerTextScale = action.payload.markerTextScale;
    },
    addComment: (state, action) => {
      state.comments = [...state.comments, { id: new Date().getTime(), content: action.payload.content }];
    },
    setCommentInput: (state, action) => {
      state.commentInput = action.payload.commentInput;
    },
  },
})

export const {
  addMarker, setMarkerScale, setMarkerTextScale, addComment, setCommentInput,
} = globalSlice.actions

export const store = configureStore({
  reducer: globalSlice.reducer,
});
