import './App.css'
import { getArticlesByTag, getArticlesByWord } from './api';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Politics from './components/Politics';
import Sport from './components/Sport';
import Media from './components/Media';
import Economy from './components/Economy';
import MainPage from './components/MainPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='Main-banner'>
          <div className='Navlink-bar'>
            <NavLink exact to="/">Main</NavLink>
            <NavLink to="/politics">Politics</NavLink>
            <NavLink to="/sport">Sport</NavLink>
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/economy">Economy</NavLink>
          </div>
          <div className='Navlink-bar-addition'>
            <h1>An obscure clause in Canada’s charter sparks furious debates over rights</h1>
            <p>At the height of a bitter pay dispute with Ontario education workers earlier this month, the provincial premier, Doug Ford, passed a law that barred employees from striking and imposed a multi-year contract on them – breaching their constitutional rights.</p>
          </div>
          
        </div>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="politics" element={<Politics />} />
          <Route path="sport" element={<Sport />} />
          <Route path="media" element={<Media />} />
          <Route path="economy" element={<Economy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



