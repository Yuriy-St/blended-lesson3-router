import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onHandleChange = evt => {
    setValue(evt.target.value.toLowerCase().trim());
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();

    onSubmit(value);
    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={onHandleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={onHandleChange}
        value={value}
      >
        <option disabled value="" style={{ color: 'red' }}>
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value} style={{ color: 'red' }}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};
