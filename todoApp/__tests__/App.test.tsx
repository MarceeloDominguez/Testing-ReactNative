import {render, fireEvent} from '@testing-library/react-native';
import App from '../App';

describe('Todo List App', () => {
  test('add task', () => {
    const {getByPlaceholderText, getByText, queryByText} = render(<App />);

    const taskInput = getByPlaceholderText('Add a Task...');
    const addButton = getByText('Add');

    //agrego una tarea
    fireEvent.changeText(taskInput, 'Mi primer tarea');
    fireEvent.press(addButton);

    //verifico si la tarea se agrego a la lista
    const taskItem = queryByText('Mi primer tarea');
    expect(taskItem).not.toBeNull();

    //agrego una segunda tarea
    fireEvent.changeText(taskInput, 'Mi segunda tarea');
    fireEvent.press(addButton);

    //verifico si la segunda tarea se agrego a la lista
    const taskItem2 = queryByText('Mi segunda tarea');
    expect(taskItem2).not.toBeNull();
  });

  test('Adding an empty task', () => {
    const {getByPlaceholderText, getByText, queryByText} = render(<App />);

    const taskInput = getByPlaceholderText('Add a Task...');
    const addButton = getByText('Add');

    //agregar una tarea vacia
    fireEvent.changeText(taskInput, '');
    fireEvent.press(addButton);

    //verifico que la tarea vacia no se agregue a la lista
    const taskItem = queryByText('');
    expect(taskItem).toBeNull();
  });
});
