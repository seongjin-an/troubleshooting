import './typedef';
import OlFeature from 'ol/Feature';
import OlPoint from 'ol/geom/Point'
import OlStyle from 'ol/style/Style';
import OlIconStyle from 'ol/style/Icon';
import OlTextStyle from 'ol/style/Text';
import OlFillStyle from 'ol/style/Fill';
import OlStrokeStyle from 'ol/style/Stroke';
import { transform } from 'ol/proj';
// typedef only
// eslint-disable-next-line no-unused-vars
import OlVectorSource from 'ol/source/Vector';


function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

export const createMockMarker = () => ({
  id: new Date().getTime(),
  date: new Date(getRandomInRange(1609459200000, 1640995200000)).toISOString().slice(0,16).replace('T', ' '),
  lonLat: [getRandomInRange(126.9, 127.1, 6), getRandomInRange(37.5, 37.6, 6)],
});

/**
 * @param {Marker} marker 
 * @param {OlVectorSource} vectorSource 
 * @param {InitialState['mapConfig']} options
 */
export const renderMarker = (marker, vectorSource, { markerScale = 1, textScale = 1.2 }) => {
  const prevFeature = vectorSource.getFeatureById(marker.id);
  if (prevFeature) {
    // vectorSource.removeFeature(prevFeature);  
    iconStyle.getText().setText(marker.date);
    iconStyle.getText().setScale(textScale);
    iconStyle.getImage().setScale(markerScale);

    return prevFeature.setStyle(iconStyle);
  }
  // console.log(vectorSource.getFeatures());
  const iconFeature = new OlFeature({
    id: marker.id,
    geometry: new OlPoint(transform(marker.lonLat, 'EPSG:4326', 'EPSG:3857'))
  });
  iconFeature.setId(marker.id);

  iconStyle.getText().setText(marker.date);
  iconStyle.getText().setScale(textScale);
  iconStyle.getImage().setScale(markerScale);

  iconFeature.setStyle(iconStyle);
  vectorSource.addFeature(iconFeature);
  // console.log(vectorSource.getFeatures());
};

const iconStyle = new OlStyle({
  image: new OlIconStyle(({
      anchor: [0.5, 1],
      src: `http://cdn.mapmarker.io/api/v1/pin?text=P&size=50&hoffset=1`,
      scale: 1,
  })),
  text: new OlTextStyle({
    text: '111',
    scale: 1.2,
    stroke: new OlStrokeStyle({ color: 'black' }),
    fill: new OlFillStyle({
      color: 'white',
    }),
  }),
});
