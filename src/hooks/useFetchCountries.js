import React, { useEffect } from 'react';
import { useState } from 'react';
import { getCountries } from 'service/country-service';

export const useFetchCountries = () => {
  const [countires, setCountires] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getCountries();
        setCountires(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { countires, isLoading, error };
};
