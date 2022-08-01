import React from 'react';
import {StyleSheet} from 'react-native';
import {StyledView} from '..';

const Content: React.FC<{children: React.ReactElement}> = ({children}) => {
  return <StyledView style={styles.contentContainer}>{children}</StyledView>;
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 5,
  },
});
export default Content;
