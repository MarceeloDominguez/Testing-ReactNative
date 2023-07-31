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

  test('Deleting a task', () => {
    const {queryByText, getByPlaceholderText, getByText} = render(<App />);

    const input = getByPlaceholderText('Add a Task...');
    const addButton = getByText('Add');

    fireEvent.changeText(input, 'Mi primer tarea');
    fireEvent.press(addButton);

    //verifico si la tarea se agrego a la lista
    const taskItem = queryByText('Mi primer tarea');
    expect(taskItem).not.toBeNull();

    //encuentro el boton para eliminar una tarea
    const deleteButton = getByText('Delete');
    fireEvent.press(deleteButton);

    //verifico si la tarea fue eliminada de la lista
    const deletedTaskItem = queryByText('Mi primer tarea');
    expect(deletedTaskItem).toBeNull();
  });

  test('Toggle task completed', () => {
    const {getByPlaceholderText, getByText, queryByText} = render(<App />);

    const input = getByPlaceholderText('Add a Task...');
    const addButton = getByText('Add');

    fireEvent.changeText(input, 'Mi primer tarea');
    fireEvent.press(addButton);

    //verifico si la tarea se agrego a la lista
    const taskItem = queryByText('Mi primer tarea');
    expect(taskItem).not.toBeNull();

    //encuentro el boton para chequear la tarea
    const checkButton = getByText('INC');

    //verifico que la tarea al inicio este como no completada
    expect(checkButton.props.children).toBe('INC');

    //cambio a una tarea completada
    fireEvent.press(checkButton);

    //verifico que la tarea este completada
    expect(checkButton.props.children).toBe('COM');

    //cambio la tarea de nuevo
    fireEvent.press(checkButton);

    //verifico que la tarea se vuelva a marcar como no completada
    expect(checkButton.props.children).toBe('INC');
  });
});
