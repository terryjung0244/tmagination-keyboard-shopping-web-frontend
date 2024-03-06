import React from 'react';
import * as Styles from './KeycapIndex.styled';
import SearchKeycap from '../search/SearchKeycap';
import { Link, Route, Routes } from 'react-router-dom';
import CreateKeycap from '../createKeycap/CreateKeycap';

const KeycapIndex = () => {
  // const [showCreateNewKeycapInput, setShowCreateNewKeycapInput] = useState<>('');
  return (
    <Styles.KeycapIndex>
      <SearchKeycap />
      <div className="createBtnMain">
        <Link to="/dashboard/keycap/create" className="createNewKeycapBtn">
          Create New Keycap
        </Link>
      </div>
      <Routes>
        <Route path="/create" element={<CreateKeycap />} />
      </Routes>
    </Styles.KeycapIndex>
  );
};

export default KeycapIndex;
