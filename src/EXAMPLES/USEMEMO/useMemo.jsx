import { useState, useEffect, useMemo } from 'react';
import '../../App.css';

function complexComputed(num) {
  let i = 0;
  while (i < 999999999) i++;
  return num / 6;
}

export function UseMemo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? 'darkred' : 'black',
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexComputed(number);
  }, [number]);

  useEffect(() => {
    console.log('Style changed');
  }, [styles]);

  return (
    <>
      <h1>useMemo hook</h1>
      <h2 style={styles}>Вычисляемое свойство: {computed}</h2>
      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
        <button onClick={() => setNumber((prev) => prev + 1)}>Добавить</button>
        <button onClick={() => setNumber((prev) => prev - 1)}>Удалить</button>
        <button onClick={() => setColored((prev) => !prev)}>
          Изменить цвет
        </button>
      </div>
    </>
  );
}
