import { createContext, useContext, useEffect, useState } from "react";
import {
  formatDate,
  convertToEmoji,
  getDataFromLoacleStorage,
  setDateToLocalStorage,
} from "../helpers/helpers";

export const getRandomDateString = () => {
  const start = new Date(2015, 0, 1); // Jan 1, 2015
  const end = new Date(2025, 11, 31); // Dec 31, 2025
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  return formatDate(randomDate.toString()); // Full string with weekday, time, timezone
};

const iniialCities = [
  {
    cityName: "Rome",
    country: "Italy",
    emoji: convertToEmoji("IT"),
    lat: 41.9028,
    lng: 12.4964,
    notes: "Ancient ruins and delicious food",
    date: getRandomDateString(),
    id: 3433,
    display_name: "Rome, Italy, Route 76",
  },
];

const CountriesAndCitiesContext = createContext();

const CountriesAndCitiesProvider = ({ children }) => {
  const [cities, setCities] = useState(() => {
    const fromLocalStorage = getDataFromLoacleStorage("cities");
    return fromLocalStorage.length > 0 ? fromLocalStorage : iniialCities;
  });
  const [newCity, setNewCity] = useState(
    (cities?.length > 0 && cities[cities.length - 1]) || {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedCities = getDataFromLoacleStorage("cities");
    if (storedCities) {
      setCities(storedCities);
    }
  }, []);

  useEffect(() => {
    if (cities.length > 0) {
      setDateToLocalStorage(cities);
    }
  }, [cities]);

  const removeCity = (city) => {
    const changedCities = cities.filter((el) => el.cityName !== city);
    setDateToLocalStorage(changedCities);
    return setCities(changedCities);
  };

  return (
    <CountriesAndCitiesContext.Provider
      value={{
        cities,
        isLoading,
        error,
        newCity,
        setNewCity,
        setCities,
        removeCity,
      }}
    >
      {children}
    </CountriesAndCitiesContext.Provider>
  );
};

const useCTX = () => {
  const context = useContext(CountriesAndCitiesContext);
  if (!context)
    throw new Error("useCTX must be used inside CountriesAndCitiesProvider");
  return context;
};

export { CountriesAndCitiesProvider, useCTX };
