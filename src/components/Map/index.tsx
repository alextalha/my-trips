import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export type MapProps = {
  places?: Place[]
}

export type Place = {
  id: number
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {places?.map(({ id, name, location }) => {
      const { latitude, longitude } = location

      return (
        <Marker
          position={[latitude, longitude]}
          title={name}
          key={`place-${id}`}
        />
      )
    })}
  </MapContainer>
)

export default Map
