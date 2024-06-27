import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PostItem from '../components/PostItem';

const posts = [
  {
    id: '1',
    username: 'Alice',
    postText: 'Had a great day at the park!',
    imageUrl: 'https://via.placeholder.com/400',
  },
  {
    id: '2',
    username: 'Eva',
    postText: 'Reading a fascinating book.',
    imageUrl: '',
  },
  {
    id: '3',
    username: 'Charlie',
    postText: 'Just finished a 10k run!',
    imageUrl: 'https://via.placeholder.com/400',
  },
  {
    id: '4',
    username: 'David',
    postText: 'Check out this amazing sunset.',
    imageUrl: 'https://via.placeholder.com/400',
  },
  {
    id: '5',
    username: 'Eva',
    postText: 'Reading a fascinating book.',
    imageUrl: '',
  },
  // Adicione mais posts fictícios aqui
];

const FeedScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostItem
            username={item.username}
            postText={item.postText}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default FeedScreen;
