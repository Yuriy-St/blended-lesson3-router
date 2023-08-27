import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByRegion } from 'hooks/useFechByRegion';

export const CountrySearch = () => {
  const { countires, isLoading, error, onHandleSubmit } = useFetchByRegion();

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        {error && (
          <Heading textAlign="center">Oop! Something went wrong...</Heading>
        )}
        {isLoading && <Loader />}
        {countires.length > 0 && <CountryList countries={countires} />}
      </Container>
    </Section>
  );
};
