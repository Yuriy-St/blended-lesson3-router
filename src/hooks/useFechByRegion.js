import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const useFetchByRegion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countires, setCountires] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const region = searchParams.get('query');
    if (!region) return;

    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountires(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const onHandleSubmit = value => {
    setSearchParams({ query: value });
  };

  return { countires, isLoading, error, onHandleSubmit };
};
