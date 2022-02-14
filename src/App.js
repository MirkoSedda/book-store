import './App.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import BookWrapper from './components/BookWrapper'
import horrorBooks from './data/horror.json'

function App() {
  return (
    <div className="App bg-dark">
      <MyNavbar />
      <Welcome />
      <BookWrapper books={horrorBooks} />
      <MyFooter />
    </div>
  )
}

export default App
