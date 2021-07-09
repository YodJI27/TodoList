import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Card = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.cardText}>{props.text}</Text>
        <TouchableOpacity style={styles.deleteCard} onPress={props.deleteTask}>
          <Image
            source={require('../../image/image.jpg')}
            style={styles.image}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
    padding: 0,
    maxHeight: 55,
    marginBottom: 10,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: 275,
    maxWidth: 275,
    minHeight: 45,
    margin: 0,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 15,
  },
  cardText: {
    textAlign: 'left',
    fontSize: 16,
  },
  deleteCard: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 4,
  },
  image: {
    width: 18,
    height: 18,
  },
});

export default Card;
