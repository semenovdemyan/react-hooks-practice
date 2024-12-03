import { useState, useEffect } from 'react';
import '../../App.css';

export function UseEffect() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log('Component did mount');
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <h1>useEffect hook</h1>
      <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
        <button onClick={() => setType('users')}>Пользователи</button>
        <button onClick={() => setType('todos')}>Todo</button>
        <button onClick={() => setType('posts')}>Посты</button>
      </div>
      <h2>Ресурс: {type}</h2>
      {/* Пример 1 */}
      {JSON.stringify(data, null, 2)}

      {/* Пример 2 */}
      {JSON.stringify(pos)}
      <div
        style={{
          justifyContent: 'center',
          maxWidth: '100%',
          margin: '30px',
        }}
      ></div>
    </>
  );
}
