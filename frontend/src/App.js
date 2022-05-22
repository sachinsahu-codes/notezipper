import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Header />
        <main>
          <Route path="/" component={LandingPage} exact />
          <Route path='/mynotes' component={MyNotes} />
        </main>
      <Footer />
    </Routes>
  )
}

export default App;
