import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { Button,  } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.shoe}>Shoe</Text>
      <Text style={styles.box}>Box</Text>
      <StatusBar style="auto" />
      <Button
                title="LOG IN"
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
              />
      <Text>Sign Up</Text>
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
  shoe:{
    fontSize:80,
    color:'red',
    fontWeight:'bold'
  },
  box:{
    fontSize:160,
    color:'black',
    fontWeight:'bold'
  }
});
