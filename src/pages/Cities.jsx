import { useCTX } from "../context/CitiesContext";
import List from "../components/List";
import Spinner from "../components/Spinner";
import { P } from "../components/Heading";

const Cities = () => {
  const { cities, removeCity, isLoading, error } = useCTX();

  if (isLoading) {
    return <Spinner/>
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  if (cities.length === 0) {
    return <P>You have not yet cities to visit. Start by clicking somewhere on the map</P>;
  }
  return <List list={cities} removeCity={removeCity} />;
};
export default Cities;
