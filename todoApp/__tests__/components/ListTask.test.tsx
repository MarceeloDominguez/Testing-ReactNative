import {render} from '@testing-library/react-native';
import ListTask from '../../components/ListTask';

describe('List Task', () => {
  const mockItem = {task: 'Mi primer tarea', id: 1, completed: false};
  const handleDeleteTask = () => {};
  const handleCheckTask = () => {};

  test('ListTask receives item prop correctly', () => {
    const {getByText} = render(
      <ListTask
        item={mockItem}
        handleDeleteTask={handleDeleteTask}
        handleCheckTask={handleCheckTask}
      />,
    );

    const renderedItem = getByText(mockItem.task);

    //verifico que el item se muestre correctamente
    expect(renderedItem).not.toBeNull();
  });
});
