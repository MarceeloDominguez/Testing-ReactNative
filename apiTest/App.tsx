import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import useApi from './src/hook/useApi';
import CardProducts from './src/components/CardProducts';

function App() {
  const {products, loading} = useApi();

  if (loading) {
    return (
      <View
        testID="loading-indicator"
        style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={30} color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Productos</Text>
      <FlatList
        data={products}
        keyExtractor={(_, index) => index.toPrecision()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CardProducts item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
