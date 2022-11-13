import './App.css';
import {Routes,Route} from 'react-router-dom'
import Main_Page from './pages/mainpage/Main_Page';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="">
          <Routes>
            {/* Main menu */}
            <Route path='/' element={<Main_Page />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
