import { useEffect } from 'react';
import './App.css';
import Product from './components/Product/Product.jsx'
import Header from './components/Header/Header.jsx'
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form/Form.jsx'

const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, [])

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
