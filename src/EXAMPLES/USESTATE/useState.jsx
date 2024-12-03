import { useState } from 'react';
import '../../App.css';

export function UseState() {
  const [counter, setCounter] = useState(0);

  function increment() {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // Пример с добавлением двух единиц:
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  // Другой пример:
  const [state, setState] = useState({
    title: 'Счётчик',
    date: Date.now(),
  });

  console.log(state);

  function updTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: 'новое название',
      };
    });
  }

  function returnTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: 'Счётчик',
      };
    });
  }

  return (
    <>
      <div>
        <h1>useState hook</h1>
        <h2>1 пример. Счётчик</h2>
      </div>

      <div className="card">
        <button onClick={() => setCounter((count) => count + 1)}>
          count is {counter}
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button onClick={() => increment()}>Добавить</button>
        <button onClick={() => decrement()}>Убрать</button>
      </div>

      <p>useState всегда создаётся на верхнем уровне компонента.</p>

      <h2>2 пример</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <span style={{ margin: '20px 0' }}>{state.title}</span>
        <span style={{ margin: '20px 0' }}>{state.date}</span>
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button onClick={updTitle}>Изменить название</button>
        <button onClick={returnTitle}>Вернуть название</button>
      </div>
    </>
  );
}
