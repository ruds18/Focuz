import './App.css';
import Feed from './components/Feed';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import VideoDetail from './components/VideoDetail';

function App() {
  return (
    <div className="App" >
     <BrowserRouter>
       <h1>Focuz </h1>
       <div style={{
      "margin": "1rem",
      "border": "2px solid black",
      "padding": "1rem",
      "borderRadius": "1rem",
      "height": "50vh"
    }}>
       <Routes>
         <Route path='/' element={<Feed/>}  />
         <Route path='/video/:id/:playlistId' element={<VideoDetail/>} />
         <Route path='*' element={"Page Not Found"}/>
       </Routes>
       </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
