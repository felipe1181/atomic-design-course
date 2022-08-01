import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {StyledView} from '..';

const ScreenContainer: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({children}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle={'light-content'} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default ScreenContainer;
