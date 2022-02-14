import './App.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import BookWrapper from './components/BookWrapper'
import Parent from './components/Parent'
import horrorBooks from './data/horror.json'

function App() {
  return (
    <div className="App bg-dark">
      <MyNavbar />
      <Welcome />
      <Parent />
      <BookWrapper books={horrorBooks} />
      <MyFooter />
    </div>
  )
}

export default App
