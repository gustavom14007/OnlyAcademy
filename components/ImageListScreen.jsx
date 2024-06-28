import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { supabase } from '@/src/supabaseClient'; // Assuming you have configured Supabase client

const ImageListScreen = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // Fetch list of files from Supabase Storage in 'public/' folder
      const { data, error } = await supabase.storage.from('imagens').list('public');
      if (error) {
        console.error('Error fetching images:', error.message);
        return;
      }

      // Set state with images including URLs
      setImageList(data);
    } catch (error) {
      console.error('Error fetching images:', error.message);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: `https://fkrmxbkqlhuusuthpmgd.supabase.co/storage/v1/object/public/imagens/public/${item.name}`}}/>
    </View>
  );

  return (
    <View style={styles.container}>
     
      <FlatList
        ola
        data={imageList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  imageContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default ImageListScreen;