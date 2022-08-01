import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import api from './api';
import {Dashboard, ScreenContainer} from './components';

const App = () => {
  return (
    <ScreenContainer>
      <Dashboard.Header />
      <View style={{flex: 1}}>
        <FlatList
          data={api}
          renderItem={({item}) => (
            <View style={styles.postCard}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postAuthor}>{item.author}</Text>
              <Text style={styles.postDescription}>{item.description}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.containerFooter}>
        <Text style={styles.titleFooter}>Criado por Felipe Ferraresi</Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    marginBottom: 5,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  headerImage: {
    height: 120,
  },
  headerTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
    padding: 5,
  },

  postCard: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  postAuthor: {
    fontSize: 14,
  },
  postDescription: {
    fontSize: 12,
    marginVertical: 10,
  },
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

export default App;
