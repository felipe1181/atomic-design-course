import React from 'react';
import api from '../../api';
import {Dashboard, ScreenContainer} from '../../components';
import {Post} from './components';

const Home: React.FC = () => {
  return (
    <ScreenContainer>
      <Dashboard.Header />
      <Dashboard.Content>
        <Post data={api} />
      </Dashboard.Content>
      <Dashboard.Footer />
    </ScreenContainer>
  );
};

export default Home;
