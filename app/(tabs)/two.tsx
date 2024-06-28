import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import MessagesScreen from '@/components/MessagesScreen';
import SearchBar from '@/components/SearchBar';
import Posts from '@/components/Posts';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <SearchBar onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } }/>
      <Posts/>
      <MessagesScreen />
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
