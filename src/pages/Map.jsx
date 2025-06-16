import styled from "styled-components";
import Section from "../components/Section";
import Asside from "../components/Asside";
import Header from "../components/Header";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCTX } from "../context/CitiesContext";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import { convertToEmoji } from "../components/Form";
import StyledPopup from "../components/StyledPopup"; 

import L from "leaflet"; 

export const userIcon = L.divIcon({
  className: "custom-user-icon",
  html: `<div class="marker-pin"></div><div class="pulse-ring"></div>`,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});

const StyledMap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: gray;
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
`;

function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center[0] && center[1]) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);

  return null;
}

const Map = () => {
  const { cities,newCity, setNewCity } = useCTX(); 
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const latidute = parseFloat(searchParams.get("lat"));
  const longitude = parseFloat(searchParams.get("lng"));

  const initialPosition =
    !isNaN(latidute) && !isNaN(longitude)
      ? [latidute, longitude]
      : [48.8566, 2.3522];

  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    if (latidute !== null && longitude !== null) {
      setPosition([latidute, longitude]);
    }
  }, [latidute, longitude]);

  function ClickHandler({ onClick }) {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;

        setPosition([lat, lng]);

        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        const data = await res.json();

        const locationInfo = {
          lat,
          lng,
          city:
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Unknown",
          country: data.address.country,
          id: data.place_id,
          display_name: data.display_name,
          emoji: convertToEmoji(data.address.country_code),
        };

        onClick(locationInfo);
        setNewCity(locationInfo);
        navigate("/map/form");
      },
    });
    return null;
  }

  return (
    <StyledMap>
      <Header pos="pos" />
      <Asside>
        <Section>
          <Outlet />
        </Section>
      </Asside>
      <StyledMain>
        <MapContainer
          style={{ height: "100%" }}
          center={position}
          zoom={10}
          scrollWheelZoom={false}
          zoomControl={false}
          onClick={() => navigate("/map/form")}
        >
          <MapUpdater center={position} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <ZoomControl position="bottomright" />
          <ClickHandler
            onClick={(locInfo) => {
              setPosition([locInfo.lat, locInfo.lng]);
            }}
          /> 

          {cities?.map((el) => {
            return (
              <Marker key={el.cityName} position={[el.lat, el.lng]}>
                <Popup>
                  <StyledPopup city={el} />
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </StyledMain>
    </StyledMap>
  );
};

export default Map;
