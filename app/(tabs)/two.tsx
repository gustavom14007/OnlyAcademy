import { StyleSheet } from 'react-native';
import  Camera  from '/GIT/OnlyAcademy/components/camera';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import MessagesScreen from '@/components/MessagesScreen';
import SearchBar from '@/components/SearchBar';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
