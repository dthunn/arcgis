import './style.css'

import '@arcgis/map-components/components/arcgis-layer-list'
import '@arcgis/map-components/components/arcgis-map'
import '@arcgis/map-components/components/arcgis-zoom'

import '@esri/calcite-components/components/calcite-navigation'
import '@esri/calcite-components/components/calcite-navigation-logo'
import '@esri/calcite-components/components/calcite-shell'

const arcgisLayerList = document.querySelector('arcgis-layer-list')

// Set the listItemCreatedFunction to add a legend to each list item
arcgisLayerList.listItemCreatedFunction = (event) => {
  const { item } = event
  if (item.layer.type !== 'group') {
    item.panel = {
      content: 'legend',
    }
  }
}

viewElement.addEventListener('arcgisViewReadyChange', () => {
  const { portalItem } = viewElement.map

  const navigationLogo = document.querySelector('calcite-navigation-logo')
  navigationLogo.heading = portalItem.title
  navigationLogo.description = portalItem.snippet
  navigationLogo.thumbnail = portalItem.thumbnailUrl

  const layer = viewElement.map.layers.find(
    (layer) => layer.id === 'Accidental_Deaths_8938',
  )

  layer.popupTemplate.title = 'Accidental Deaths'
})
