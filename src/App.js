import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css'

import Home from "./Pages/home/Home"
import Create from "./Pages/create/Create"
import Recipe from "./Pages/recipe/Recipe"
import Search from "./Pages/search/Search"
import Navbar from "./Components/Navbar"
import ThemeSelector from './Components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {
  const {mode} =useTheme()

  return (
    <div className={`App ${mode}`}> 
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
        <Switch> 
          <Route exact path ="/">
             <Home/> 
          </Route>

          <Route path ="/create">
             <Create/> 
          </Route>

          <Route path ="/search">
             <Search/> 
          </Route>

          <Route path ="/recipe/:id">
             <Recipe/> 
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
