import { useEffect, useState } from "react";
import { getCurrentPositionOfUser } from "../helpers/helpers";

export const useGeoLocation = () => {
  const [userPosition, setUserPosition] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    let isMounted = true;

    const getPosition = async () => {
      setIsLoading(true);
      try {
        const data = await getCurrentPositionOfUser();
        if (data && isMounted) {
          setUserPosition([data.latitude, data.longitude]);
        }
      } catch (error) {
        setError(error)
        console.error("Error in useGeoLocation:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    getPosition();

    return () => {
      isMounted = false;
    };
  }, []);

  return { isLoading, userPosition, error };
};
