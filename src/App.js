import { useEffect } from 'react';
import './App.css';
import Product from './components/Product/Product'

const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div>
      <h1>Hello13</h1>
      <button onClick={onClose}>Закрыть</button>
      <Product />
    </div>
  )
}

export default App;
