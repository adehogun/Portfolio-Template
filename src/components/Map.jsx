import { Geography, ComposableMap, Geographies } from "react-simple-maps"
import React from 'react'
import "../styles.css"

function Map() {
  return (
   <div>
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
  )
}

export default Map;
