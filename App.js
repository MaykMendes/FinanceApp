import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';


export default function App() {
  const [inputText, setInputText] = useState('');


  const handleButtonPress = () => {
    alert(inputText)
  };

  const Cat = () => {
    const name = inputText;
    return <Text>{name}</Text>
  };




  return (
    <View style={styles.container}>
      <Cat/>
      <StatusBar style="auto" />
      {/* <Image style={styles.imgcelular} source={
            require('./components/img/phonea23.png')
          }
          /> */}
      <TextInput
      style={styles.input}
      onChangeText={text => setInputText(text)}
      placeholder="useless placeholder"
      // keyboardType="numeric"
      />
      <Button 
      title="Press Me"
      color="#03c04a"
      onPress={handleButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgcelular: {
    width: 200, 
    height: 200
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});