import './App.css';
import {
  UseCallback,
  UseEffect,
  UseRef,
  UseMemo,
  UseState,
} from './EXAMPLES/EXAMPLES';
export function App() {
  return (
    <div>
      <UseState />
      <div style={{ height: '200px' }}></div>
      <UseEffect />
      <div style={{ height: '200px' }}></div>
      <UseRef />
      <div style={{ height: '200px' }}></div>
      <UseMemo />
      <div style={{ height: '200px' }}></div>
      <UseCallback />
      <div style={{ height: '200px' }}></div>
    </div>
  );
}
