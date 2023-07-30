import {render} from '@testing-library/react-native';
import ListTask from '../../components/ListTask';

describe('List Task', () => {
  test('ListTask receives item prop correctly', () => {
    const mockItem = 'Mi primer tarea';

    const {getByText} = render(<ListTask item={mockItem} />);

    const renderedItem = getByText(mockItem);

    //verifico que el item se muestre correctamente
    expect(renderedItem).not.toBeNull();
  });
});
