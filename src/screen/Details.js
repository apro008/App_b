import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { Button, Card as PaperCard } from 'react-native-paper';

import SafeView from '../component/SafeView.js';
import AppText from '../component/AppText.js';
import Card from '../component/card.js';
import { weatherClient } from '../api/client.js';

const Details = ({ route }) => {
  const [weatherData, setWeatherData] = React.useState([]);
  const data = route.params.result.slice(-1);

  return (
    <SafeView>
      <FlatList
        data={data}
        keyExtractor={(i) => i.numericCode}
        renderItem={({ item }) => {
          const getWeatherData = async () => {
            try {
              const res = await weatherClient.get(`${item.capital}`);
              const data = await res.data;
              setWeatherData([data.current]);
              
            } catch (error) {
              console.log(error);
            }
          };

          return (
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <AppText style={styles.textStyle}>{item.name}</AppText>
              </View>
              <Card image={item.flags.png} onPress={() => console.log()} />
              <View style={styles.appTextmargin}>
                <AppText>Capital: {item.capital}</AppText>
                <AppText>population: {item.population} </AppText>
                <AppText>latlng: {item.latlng.toString()} </AppText>
              </View>
              <Button style={styles.appTextmargin} onPress={getWeatherData} icon="arrow-right-thick" mode="contained">
                Capital Weather
              </Button>
            </View>
          );
        }}
      />
      <FlatList
        data={weatherData}
        keyExtractor={(i) => i.observation_time}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatListContainer}>
              <AppText>Capital: {item.temperature}</AppText>
              <AppText>wind_speed: {item.wind_speed}</AppText>
              <AppText>precip: {item.precip}</AppText>
              <PaperCard.Cover source={{ uri: item.weather_icons[0] }} style={styles.paperCardCover} />
            </View>
          );
        }}
      />
    </SafeView>
  );
};

export default Details;

const styles = StyleSheet.create({
  paperCardCover: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  flatListContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  appTextmargin: {
    marginLeft: 20,
  },
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
  },
  textStyle: {
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
