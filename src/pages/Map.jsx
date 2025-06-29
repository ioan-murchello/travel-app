import styled from "styled-components";
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
import Article from "../components/Article";
import { MdTry } from "react-icons/md";

const customHtmlIcon = L.divIcon({
  className: "my-custom-marker",
  html: `<div class="marker-pin"></div><div class="pulse-ring"></div>`,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});

const StyledMap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: gray;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow: hidden;
  }
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
  const [searchParams] = useSearchParams();

  const latidute = parseFloat(searchParams.get("lat"));
  const longitude = parseFloat(searchParams.get("lng"));

  const initialPosition =
    !isNaN(latidute) && !isNaN(longitude)
      ? [latidute, longitude]
      : [48.8566, 2.3522];

  const { cities, setNewCity } = useCTX();
  const [position, setPosition] = useState(initialPosition);
  const isInCities = cities?.some(
    (city) => city.lat === position[0] && city.lng === position[1]
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (latidute !== null && longitude !== null) {
      setPosition([latidute, longitude]);
    }
  }, [latidute, longitude]);

  function ClickHandler({ onClick }) {
    useMapEvents({
      click: async (e) => {
        console.log(e, "click event on map");

        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);

        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        console.log(res, "ressponse from reverse geocoding");
        if (!res.ok) {
          alert("Failed to fetch location data. Please try again later.");
          throw new Error("Failed to fetch location data");
        }
        const data = await res.json();
        if (!data) return;
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
        <Article>
          <Outlet />
        </Article>
      </Asside>
      <StyledMain>
        <MapContainer
          style={{ height: "100%" }}
          center={position}
          zoom={10}
          scrollWheelZoom={false}
          zoomControl={false}
          onClick={() => {
            navigate("/map/form");
          }}
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

          {!isInCities && position[0] && position[1] && (
            <Marker position={position} icon={customHtmlIcon}>
              <Popup>Selected Location</Popup>
            </Marker>
          )}

          {cities?.map((el) => {
            return (
              <Marker key={el.id} position={[el.lat, el.lng]}>
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
