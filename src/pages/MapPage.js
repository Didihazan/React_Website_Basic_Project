import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

export default function MapPage() {
  return (
    <div className='container'>
      <h1>Map test</h1>
      <MapContainer center={[31.94, 34.89]} zoom={7} scrollWheelZoom={true}>
        <Marker key={"11"} position={[32.1564, 34.8057]} >
          {/* popup - יציג בלחיצה */}
          <Popup>
            <button onClick={() => {
              alert("microsoft windows company")
            }}>
              Microsoft
            </button>
          </Popup>
        </Marker>
        <Marker eventHandlers={{
          click:(e) => {alert("אונבירסטת אריאל")}
        }} key={"22"} position={[32.103553905824256, 35.20688199707208]} >
          {/* tooltip - יציג במעבר עכבר */}
          <Tooltip direction='top' >
            אונבירסטת אריאל
          </Tooltip>
        </Marker>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}
