import Header from './components/Header'
import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

  return (
    <>
      <FeedbackProvider>
        <Router>

          <Header />
          <Routes>
            <Route exact path='/' element={<>

              <div className='container'>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </div>
            </>}>

            </Route>
            <Route path='/about' element={<AboutPage />}></Route>

          </Routes>
          <AboutIconLink />
        </Router>
      </FeedbackProvider>
    </>

  );

}

export default App;