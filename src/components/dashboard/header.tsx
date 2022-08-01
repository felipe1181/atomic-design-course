import React from 'react';
import {StyleSheet} from 'react-native';

import {ImageBackground, StyledView, Typography} from '..';
import assets from '../../assets';
assets;
const Header: React.FC = () => {
  return (
    <StyledView style={styles.headerContainer}>
      <Typography variant="Heading">Atomic design sem enrolação</Typography>
      <ImageBackground
        style={styles.headerImage}
        source={assets.header.background}
      />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 5,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  headerImage: {
    height: 120,
  },
});

export default Header;
