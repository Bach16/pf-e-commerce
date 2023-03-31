import { useState } from 'react';

type Product = {
  name: string;
  price: number;
}

type Props = {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const PriceSorter = ({ products, setProducts }: Props) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSortByPrice = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    const sortedProducts = [...products].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    setProducts(sortedProducts);
  };

  return (
    <div>
      <button onClick={() => handleSortByPrice('asc')}>Ordenar por precio (de menor a mayor)</button>
      <button onClick={() => handleSortByPrice('desc')}>Ordenar por precio (de mayor a menor)</button>
    </div>
  );
};

export default PriceSorter;