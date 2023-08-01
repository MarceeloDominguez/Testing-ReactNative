import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Product} from '../interface/productInterface';

type Prop = {
  item: Product;
};

export default function CardProducts({item}: Prop) {
  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.wrapInfoCard}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'violet',
    marginVertical: 10,
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  wrapInfoCard: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
});
