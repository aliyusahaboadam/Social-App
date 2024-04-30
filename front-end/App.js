import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PostBox from './components/PostBox';
import SinglePost from './components/SinglePost';

function App() {
  return (
          
      <Router>
             <div className="container">
              <h1>Social App</h1>
              <Routes>
                <Route path="/"  element={<PostBox/>}/> 
                <Route path="/post/:id"  element={<SinglePost/>}/> 
              </Routes>

          </div>
      </Router>
 
      

 
   
  );
}

export default App;
