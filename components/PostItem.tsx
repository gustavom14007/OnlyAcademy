import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type PostItemProps = {
  username: string;
  postText: string;
  imageUrl: string;
};

const PostItem: React.FC<PostItemProps> = ({ username, postText, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.postText}>{postText}</Text>
      {imageUrl ? <Image source={{ uri: imageUrl }} style={styles.image} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default PostItem;
