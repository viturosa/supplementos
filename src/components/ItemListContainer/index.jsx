import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const mockItems = [
  {
    id: 1,
    title: 'Whey',
    description: 'Concentrado',
    price: 89.99,
    pictureUrl: 'https://www.bing.com/th?id=OPHS.T8O4nihU6r1f5g474C474&o=5&pid=21.1&w=148&h=223&qlt=100&dpr=1,3&bw=6&bc=FFFFFF',
  },
  {
    id: 2,
    title: 'Creatina',
    description: 'Pura',
    price: 159.99,
    pictureUrl: 'https://www.bing.com/th?id=OPHS.bUsIqvOR%2fqdqqA474C474&o=5&pid=21.1&w=148&h=223&qlt=100&dpr=1,3&bw=6&bc=FFFFFF',
  },
  {
    id: 3,
    title: 'Vitaminas',
    description: 'Multivitaminico',
    price: 99.99,
    pictureUrl: 'https://www.bing.com/th?id=OPHS.rfKj4aOc%2fQO7Iw474C474&o=5&pid=21.1&w=148&h=233&qlt=100&dpr=1,3&bw=6&bc=FFFFFF',
  },
];

const fetchItems = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockItems);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadItems = async () => {
      try {
        const fetchedItems = await fetchItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error('Erro ao buscar os itens:', error);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
