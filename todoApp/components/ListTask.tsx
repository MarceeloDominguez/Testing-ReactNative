import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Prop = {
  item: String;
};

export default function ListTask({item}: Prop) {
  return (
    <View style={styles.container}>
      <Text style={styles.task}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8400',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  task: {
    color: '#fff',
    fontWeight: '600',
  },
});
