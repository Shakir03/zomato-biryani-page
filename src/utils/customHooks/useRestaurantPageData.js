import { useState, useEffect } from "react";
import { apiEndpoints } from "../api-endpoints";
import { axiosInstance } from "../axios.helper";

function useRestaurantPageData() {
  const [restaurantPage, setRestaurantPage] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const resp = await axiosInstance.get(apiEndpoints.biryaniPage);
        setRestaurantPage(resp?.data?.page_data.sections);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error(error.message);
      }
    })();
  }, []);
  return { restaurantPage, isLoading };
}

export default useRestaurantPageData;
