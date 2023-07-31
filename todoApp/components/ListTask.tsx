import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

type Prop = {
  item: Task;
  handleDeleteTask: (id: number) => void;
  handleCheckTask: (id: number) => void;
};

export default function ListTask({
  item,
  handleDeleteTask,
  handleCheckTask,
}: Prop) {
  const {task} = item;

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.task}>
        {task}
      </Text>
      <TouchableOpacity
        style={[
          styles.buttonCheck,
          {backgroundColor: item.completed ? 'green' : 'violet'},
        ]}
        onPress={() => handleCheckTask(item.id)}>
        <Text style={styles.textButtonCheck}>
          {item.completed ? 'COM' : 'INC'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => handleDeleteTask(item.id)}>
        <Text style={styles.textButtonDelete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8400',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  task: {
    color: '#fff',
    fontWeight: '600',
    flex: 1,
  },
  buttonDelete: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButtonDelete: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonCheck: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButtonCheck: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
