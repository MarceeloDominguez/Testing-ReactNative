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
  });
});
