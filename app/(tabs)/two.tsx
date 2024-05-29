import { StyleSheet } from 'react-native';
import  Camera  from '/GIT/OnlyAcademy/components/camera';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import MessagesScreen from '@/components/MessagesScreen';
import SearchBar from '@/components/SearchBar';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <SearchBar onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } }/>
      <MessagesScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    padding: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
   
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
