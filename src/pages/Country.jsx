import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to Countries</GoBackBtn>
        {error && <Navigate to={routes.HOME} />}
        {isLoading && <Loader />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
