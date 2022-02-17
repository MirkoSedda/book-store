import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import Home from './components/Home'
import Registration from './components/Registration'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App bg-dark">
      <MyNavbar />
      <Welcome />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/class" element={<ClassComponent />} />
          <Route path="/details/:pastaId" element={<PastaDetails />} /> */}
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </div>
  )
}

export default App
