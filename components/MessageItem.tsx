import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MessageItemProps = {
  name: string;
  lastMessage: string;
};

const MessageItem: React.FC<MessageItemProps> = ({ name, lastMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.lastMessage}>{lastMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 5,
      padding: 10,
      backgroundColor: '#f8f8f8',
      borderRadius: 10,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    lastMessage: {
      marginTop: 5,
      fontSize: 14,
      color: 'gray',
      textAlign: 'left',
    },
  });

export default MessageItem;
