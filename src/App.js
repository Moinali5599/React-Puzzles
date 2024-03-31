import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './Home'
import {routes} from './RotuingData'

function App() {
  const PuzzleRoutes = routes.map((puzzle) => {
    return <Route key={puzzle.id} path = {`/${puzzle.slug}`} element = {<puzzle.component/>}/>
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data = {routes} />} />
        {PuzzleRoutes}
      </Routes>
    </div>
  );
}

export default App;
