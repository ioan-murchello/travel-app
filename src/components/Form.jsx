import { useEffect, useState } from "react";
import { formatDate } from "../helpers/helpers";

import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { useCTX } from "../context/CitiesContext";
import Spinner from "./Spinner";
import RestyledDatePicker from "./RestyledDatePicker";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  border: 1px solid var(--color-brand--2);
  border-radius: 6px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: ${(props) => (props.$type === "inp" ? "center" : "flex-start")};
  flex-direction: ${(props) => (props.$type === "inp" ? "row" : "column")};
  justify-content: ${(props) =>
    props.$type === "inp" ? "space-between" : "flex-start"};

  & textarea {
    width: 100%;
    resize: none;
  }
`;

function Form() {
  const navigate = useNavigate();
  const { newCity, setCities, setNewCity } = useCTX();
  const [created, setCreated] = useState(false);
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [id, setId] = useState(null);
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
      if (!newCity.lat && !newCity.lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${newCity.lat}&lon=${newCity.lng}&format=json`
          );
          if (!res.ok) throw new Error("Some problem with fetching city");
          const data = await res.json();

          if (!data.address.country_code)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉"
            );
          setCityName(
            data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.hamlet ||
              ""
          );
          setId(data.place_id);
          setCountry(data.address.country);
          setEmoji(convertToEmoji(data.address.country_code));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [newCity.lat, newCity.lng, newCity]
  );
  useEffect(() => {
    if (geocodingError) {
      alert(`Error: ${geocodingError}. Some problem with server.`);
    }
  }, [geocodingError]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newCity || !date) return;

    const newCityFromMap = {
      id,
      cityName,
      country,
      emoji,
      date: formatDate(date),
      notes,
      display_name: newCity.display_name,
      lat: newCity.lat,
      lng: newCity.lng,
    };
    if (!created) return;
    await setCities((prev) => [...prev, newCityFromMap]);
    navigate("/map/cities");

    setNewCity({});
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!newCity.lat && !newCity.lng)
    return <p>"Start by clicking somewhere on the map" </p>;

   

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputWrapper $type="inp">
        <label htmlFor="city">City name</label>
        <input
          id="city"
          name="city"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName || newCity.city}
        />
        <span>{newCity.emoji}</span>
      </StyledInputWrapper>

      <StyledInputWrapper $type="inp">
        <label htmlFor="date">When did you go to {cityName}?</label>
        <RestyledDatePicker setDate={setDate} newCity={newCity} date={date} />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          name="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={newCity.notes || notes}
        />
      </StyledInputWrapper>

      <StyledInputWrapper $type="inp">
        <Button
          type="submit"
          typeOfBtn="primary"
          onClick={() => setCreated(true)}
        >
          Add
        </Button>
        <Button
          typeOfBtn="back"
          onClick={() => {
            setCreated(false);
            navigate(-1);
          }}
        >
          &larr; back
        </Button>
      </StyledInputWrapper>
    </StyledForm>
  );
}

export default Form;
