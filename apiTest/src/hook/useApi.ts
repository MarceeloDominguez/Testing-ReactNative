import {useEffect, useState} from 'react';
import {Product} from '../interface/productInterface';

const useApi = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {products, loading};
};

export default useApi;
