import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

export default function Jerusalem() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try {
      const url = "http://fs1.co.il/bus/jerusalem.php";
      const {data} = await axios.get(url);
      console.log(data);
      setAr(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
    <MapContainer center={[31.7777, 35.2352]} zoom={16} scrollWheelZoom={true}>
      {ar.map(item => {
        return (
          <Marker id={item.name} position={item.pos}>
            <Popup>
              <div style={{direction:"rtl",textAlign:"right"}}>
                <h4>{item.name}</h4>
                <div>{item.info}</div>
                <a href={item.link} target='_blank'>למידע נוסף</a>
              </div>
            </Popup>
          </Marker>
        )
      })}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  </div>
  )
}
