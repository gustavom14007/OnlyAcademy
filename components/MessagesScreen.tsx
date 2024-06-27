import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MessageItem from '../components/MessageItem';

const messages = [
  {
    id: '1',
    name: 'Alice',
    lastMessage: 'Hey, how are you?',
  },
  {
    id: '2',
    name: 'Bob',
    lastMessage: 'Let\'s catch up!',
  },
  {
    id: '3',
    name: 'Charlie',
    lastMessage: 'See you tomorrow.',
  },
  {
    id: '4',
    name: 'David',
    lastMessage: 'Good night!',
  },
  {
    id: '5',
    name: 'Eva',
    lastMessage: 'Can we meet next week?',
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Happy birthday!',
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Happy birthday!',
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Happy birthday!',
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Happy birthday!',
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Happy birthday!',
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Happy birthday!',
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Happy birthday!',
  },
  {
    id: '6',
    name: 'Frank',
    lastMessage: 'Happy birthday!',
  },
  // Adicione mais mensagens fictícias aqui
];

const MessagesScreen: React.FC = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <MessageItem
              name={item.name}
              lastMessage={item.lastMessage}
            />
          )}
          keyExtractor={(item) => item.id}
          // Remova a propriedade numColumns para garantir que os itens sejam exibidos em uma única coluna
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
  });

export default MessagesScreen;
