import { useState, useCallback } from 'react';
import '../../App.css';
import { ItemsList } from './itemsList';

export const UseCallback = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black',
  };

  const generateitemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`);
  }, [count]);
  return (
    <>
      <h1>useCallback hook</h1>
      <h2 style={styles}>Количество элементов: {count}</h2>
      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
        <button onClick={() => setCount((prev) => prev + 1)}>Добавить</button>
        <button onClick={() => setColored((prev) => !prev)}>
          Изменить цвет
        </button>
      </div>
      <ItemsList getItems={generateitemsFromAPI} />
    </>
  );
};
