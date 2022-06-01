import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const Card = ({ image, onPress }) => {
  return (
    <TouchableWithoutFeedback testID="button" onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    //backgroundColor: "#fff",
    marginBottom: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '90%',
    height: 200,
  },
});

export default Card;
