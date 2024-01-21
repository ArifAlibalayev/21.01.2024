import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Mainpage from './pages/Mainpage'
import Addpage from './pages/Addpage'
import Basketpage from './pages/Basketpage'
import Detailpage from './pages/Detailpage'
import Wishlistpage from './pages/Wishlistpage'

function App() {

  return (
    <>
     <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/Add' element={<Addpage/>}/>
          <Route path='/Basket' element={<Basketpage/>}/>
          <Route path='/Wishlist' element={<Wishlistpage/>}/>
          <Route path='/Detail/:id' element={<Detailpage/>}/>


        </Route>
     </Routes>
    </>
  )
}

export default App
