import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ListTask from './components/ListTask';

function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState<String[]>([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;

    setTasksList([...tasksList, task]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List App</Text>
      <View style={styles.wrapInput}>
        <TextInput
          placeholder="Add a Task..."
          style={styles.input}
          placeholderTextColor="#333"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasksList}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ListTask item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 20,
  },
  wrapInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F9F5F6',
    flex: 1,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#FF6000',
    height: 50,
    width: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    top: -1,
  },
});

export default App;
