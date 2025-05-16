import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/FooterPage/Footer'
function App() {


  return (
    <>
 <BrowserRouter>
 <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>
  <Footer />
 </BrowserRouter>
    

    
    </>
  )
}

export default App
