import { StatusBar } from 'expo-status-bar';

import { Platform, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import UploadImage from '@/components/UploadImage';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/images/profile.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Gustavo Miguel Cristo</Text>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Bio:</Text>

      <Text style={styles.title2}>Explorador curioso da interseção entre tecnologia e arte, sempre em busca de novas maneiras de expressar ideias complexas de forma acessível. Apaixonado por ciência de dados e inteligência artificial, encontra beleza na análise de grandes conjuntos de dados e na criação de modelos preditivos. Quando não está imerso em linhas de código</Text>
      
      <UploadImage/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 12,
    fontWeight: 'bold',
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 200, // ajuste o tamanho conforme necessário
    height: 200, // ajuste o tamanho conforme necessário
    resizeMode: 'cover', // ou 'contain' para outros tipos de ajustes
    marginBottom: 20,
  },
});