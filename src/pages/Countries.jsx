import { useCTX } from "../context/CitiesContext";
import List from "../components/List";
import Spinner from "../components/Spinner";

const Countries = () => {
  const { cities, isLoading, error } = useCTX();

  // find duplicates of countries and return only one
  const countries = cities
    .map((el) => {
      return { country: el.country, emoji: el.emoji };
    })
    .filter(
      (item, index, currArr) =>
        index === currArr.findIndex((el) => el.country === item.country)
    );

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  if (countries.length === 0) {
    return <h1>You have not yet countries to visit</h1>;
  }
  return <List list={countries} modified={true} />;
};
export default Countries;
