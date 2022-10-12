import { useEffect } from 'react';
import './App.css';
import Product from './components/Product/Product.jsx'
import Header from '/.components/Header/Header.jsx'
import { Route, Routes } from 'react-router-dom'


const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Product />} />
        <Route path={'form'} element={< Form />} />
      </Routes>

    </div>
  )
}

export default App;
