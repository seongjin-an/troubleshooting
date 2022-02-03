import { createContext } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';

const vectorSource = new OlVectorSource();
const vectorLayer = new OlVectorLayer({ source: vectorSource });

const map = new Map({
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    }),
    vectorLayer,
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
const view = map.getView();

const olContextDefault = {
  map,
  view,
  vectorLayer,
  vectorSource,
};
export const OlContext = createContext(olContextDefault);

export const OlContextProvider = ({ children }) => (
  <OlContext.Provider value={olContextDefault}>
    {children}
  </OlContext.Provider>
);

export default OlContext;
