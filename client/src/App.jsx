import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes.jsx'

const App = () => {

  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App