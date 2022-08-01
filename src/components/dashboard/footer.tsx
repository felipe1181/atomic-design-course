import React from 'react';
import {StyleSheet} from 'react-native';
import {StyledView, Typography} from '..';

const Footer: React.FC = () => {
  return (
    <StyledView style={styles.containerFooter}>
      <Typography variant="Paragraph" style={styles.titleFooter}>
        Criado por Felipe Ferraresi
      </Typography>
    </StyledView>
  );
};
const styles = StyleSheet.create({
  containerFooter: {
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ccc',
  },
  titleFooter: {
    textAlign: 'center',
  },
});
export default Footer;
