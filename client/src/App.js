import Signin from './project/signup.js';
import SearchBar from './project/searchBar.js';
import Signup from './project/signin.js';
import About from './project/about.js';
import Featured from './project/featured.js';
import Home from './project/home.jsx';
import List from './project/list.jsx';
import {Route,Routes} from 'react-router-dom';
import Hotel from './project/hotel.jsx';
import Country from './project/country.js';
import Reserve from './project/reserve.js';
function App() {
  return (
              <Routes>
                <Route path='/reserve' exact element={<Reserve/>}/>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/hotel/:id' exact element={<Hotel/>}/>
                <Route path='/list' exact element={<List/>}/>
                <Route path="/searchBar" exact element={<SearchBar/>}/>
                <Route path="/signup" exact element={<Signin/>}/>
                <Route path="/signin" exact element={<Signup/>}/>
                <Route path='/about' exact element={<About/>}/>
                <Route path='/featured' exact element={<Featured/>}/>
                <Route path='/country' exact element={<Country/>}/>
              </Routes>
  );
}

export default App;
