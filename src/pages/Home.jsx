import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks';

export const Home = () => {
  const { countires, isLoading, error } = useFetchCountries();
  return (
    <Section>
      <Container>
        {error && (
          <Heading textAlign="center">Oop! Something went wrong...</Heading>
        )}
        {isLoading && <Loader />}
        {countires.length > 0 && <CountryList countries={countires} />}
      </Container>
    </Section>
  );
};
