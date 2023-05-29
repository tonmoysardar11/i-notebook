
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';


function App() {

  


  return (
    // wrapped the whole app inside NoteState to access the data of NoteState context from any component of the app
    <NoteState>
      {/* used hash router to host in github,otherwise browserrouter will work */}
      <HashRouter>
        <Navbar />
        <Alert/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Signup />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/home' element={<Home />} />


          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </NoteState>
  );
}

export default App;
