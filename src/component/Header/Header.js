import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title_text}>Today's task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    marginBottom: 50,
    marginTop: 50,
    padding: 0,
    maxHeight: 70,
  },
  title_text: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
});

export default Header;
