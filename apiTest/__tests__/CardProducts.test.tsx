import {render} from '@testing-library/react-native';
import CardProducts from '../src/components/CardProducts';

const mockItem = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 200,
  description: 'Descripcion',
  category: 'Tecnologia',
  image: 'url-image',
  rating: {
    rate: 10,
    count: 50,
  },
};

describe('Probando el componente <CardProducts />', () => {
  test('Ver si se muestra el titulo y el precio', () => {
    const {getByText} = render(<CardProducts item={mockItem} />);

    expect(
      getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'),
    ).toBeTruthy();

    expect(getByText(mockItem.price.toString())).toBeTruthy();
  });
});
