import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Pesquisa...", onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Icon name="search" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    height: 38,
  },
});

export default SearchBar;
