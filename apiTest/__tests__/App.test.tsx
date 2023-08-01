import {render, waitFor, renderHook} from '@testing-library/react-native';
import App from '../App';
import useApi from '../src/hook/useApi';

describe('Pruebas en el componente <App />', () => {
  test('debe de mostra un producto', async () => {
    const {getByText} = render(<App />);

    await waitFor(() =>
      expect(
        getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'),
      ),
    );
  });

  test('debe de mostrar el indicador antes de cargar los datos', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  test('debe de poner el loading en false cuando la data carga', async () => {
    const mockedData = [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 200,
        description: 'Descripcion',
        category: 'Tecnologia',
        image: 'url-image',
        rating: {},
      },
    ];

    jest.spyOn(global, 'fetch').mockRejectedValueOnce({
      json: jest.fn().mockRejectedValueOnce(mockedData),
    });

    const {result} = renderHook(() => useApi());

    expect(result.current.loading).toBeTruthy();

    await waitFor(() => !result.current.loading);

    expect(result.current.loading).toBeFalsy();
  });
});
