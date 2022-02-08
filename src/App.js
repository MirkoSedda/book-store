import './App.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'

function App() {
  return (
    <div className="App bg-dark">
      <MyNavbar />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  )
}

export default App
