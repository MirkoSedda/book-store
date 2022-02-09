import './App.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import BookWrapper from './components/BookWrapper'

function App() {
  return (
    <div className="App bg-dark">
      <MyNavbar />
      <Welcome />

      <BookWrapper />
      <MyFooter />
    </div>
  )
}

export default App
