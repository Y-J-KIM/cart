import './App.css'
import HomePage from './components/Home/HomePage'
import Navbar from './components/Navbar/Navbar'
// import Routing from './components/Routing/Routing'

function App() {
  

  return (
    <div className='app'>
        <Navbar/>
        <main>
          <HomePage />
        </main>
    </div>
  )
}

export default App
