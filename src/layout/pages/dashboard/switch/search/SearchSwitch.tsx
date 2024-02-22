import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col } from 'react-bootstrap';

interface ISearchSwitchProps {
  searchInputSwitchValue: (searchInput: string) => void;
}

const SearchSwitch = ({ searchInputSwitchValue }: ISearchSwitchProps) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const onChangeSearchSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSwitch = () => {
    if (!searchInput) {
      alert('Please input search switches');
      return;
    }
    searchInputSwitchValue(searchInput);
  };

  return (
    <div>
      <InputGroup>
        <Col sm={2}>
          <Form.Control
            name="searchInput"
            value={searchInput}
            onChange={onChangeSearchSwitch}
            placeholder="Search Switches"
          />
        </Col>
        <Button variant="danger" onClick={handleSearchSwitch}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchSwitch;
