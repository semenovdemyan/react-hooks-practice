import { useState, useEffect, useRef } from 'react';
import '../../App.css';

export function UseRef() {
  const [value, setValue] = useState('init');
  const renderCount = useRef(0);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
    console.log(prevValue.current.value);
  }, [value]);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>useRef hook</h1>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h2>Количество рендеров: {renderCount.current}</h2>
      <h2>Прошлое значение: {prevValue.current}</h2>
      <p>
        Если мы что-то хотим сохранить между рендерами, при этом, не вызывая
        рендера, мы использвуем ref, если такой надобности нет, мы используем
        useState.
      </p>
      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </>
  );
}
