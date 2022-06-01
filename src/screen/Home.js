import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import client from '../api/client.js';
import SafeView from '../component/SafeView.js';

const Home = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);
  const [disabled, setDisabled] = React.useState(true);

  const handleTextChange = (text) => {
    setText(text);
    if (text.length > 0) {
      setDisabled(false);
    } else setDisabled(true);
  };

  const handleOnpress = async () => {
    try {
      const res = await client.get(`${text}`);
      const result = res.data;
      setData(res);

      navigation.navigate('Details', { result });
    } catch (error) {
      console.log(`catch error`, error);
    }
  };

  return (
    <SafeView style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput label="Enter country" value={text} style={styles.textInput} onChangeText={handleTextChange} />
        <Button
          style={{
            marginTop: 20,
          }}
          disabled={disabled}
          icon="arrow-right-thick"
          mode="contained"
          onPress={handleOnpress}
        >
          Press me
        </Button>
      </View>
    </SafeView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    borderWidth: 0,
    borderRadius: 15,
    width: 250,
    height: 70,

    fontSize: 20,
    textAlign: 'center',
  },
});
