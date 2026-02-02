import esriConfig from '@arcgis/core/config.js'
import Map from '@arcgis/core/Map.js'
import MapView from '@arcgis/core/views/MapView.js'
import Graphic from '@arcgis/core/Graphic.js'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer.js'
import '@arcgis/map-components/components/arcgis-layer-list'
import '@arcgis/map-components/components/arcgis-map'
import '@arcgis/map-components/components/arcgis-zoom'

import '@esri/calcite-components/components/calcite-navigation'
import '@esri/calcite-components/components/calcite-navigation-logo'
import '@esri/calcite-components/components/calcite-shell'
// 1️⃣ ArcGIS CSS (popup styles depend on this)
import '@arcgis/core/assets/esri/themes/light/main.css'

// 🔑 API key
esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY

// Map + View
const graphicsLayer = new GraphicsLayer()

const map = new Map({
  basemap: 'arcgis/topographic',
  layers: [graphicsLayer],
})

const view = new MapView({
  container: 'viewDiv',
  map,
  center: [-118.805, 34.02],
  zoom: 13,
  popupEnabled: true,
})

// ---- POINT ----
const pointGraphic = new Graphic({
  geometry: {
    type: 'point',
    longitude: -118.80657463861,
    latitude: 34.0005930608889,
  },
  symbol: {
    type: 'simple-marker',
    color: [226, 119, 40],
    outline: { color: [255, 255, 255], width: 1 },
  },
})

graphicsLayer.add(pointGraphic)

// ---- LINE ----
const polylineGraphic = new Graphic({
  geometry: {
    type: 'polyline',
    paths: [
      [-118.821527826096, 34.0139576938577],
      [-118.814893761649, 34.0080602407843],
      [-118.808878330345, 34.0016642996246],
    ],
  },
  symbol: {
    type: 'simple-line',
    color: [226, 119, 40],
    width: 2,
  },
})

graphicsLayer.add(polylineGraphic)

// ---- POLYGON ----
const polygonGraphic = new Graphic({
  geometry: {
    type: 'polygon',
    rings: [
      [-118.818984489994, 34.0137559967283],
      [-118.806796597377, 34.0215816298725],
      [-118.791432890735, 34.0163883241613],
      [-118.79596686535, 34.008564864635],
      [-118.808558110679, 34.0035027131376],
      [-118.818984489994, 34.0137559967283], // 👈 CLOSE RING
    ],
  },
  symbol: {
    type: 'simple-fill',
    color: [227, 139, 79, 0.8],
    outline: { color: [255, 255, 255], width: 1 },
  },
  attributes: {
    Name: 'Graphic',
    Description: 'I am a polygon',
  },
  popupTemplate: {
    title: '{Name}',
    content: '{Description}',
  },
})

graphicsLayer.add(polygonGraphic)
