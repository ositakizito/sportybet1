import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Won from "./components/won";
import Run from "./components/running";
import Edit from "./components/edit";
import ReDetails from "./components/ReDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/won/:id" element={<Won/>}></Route>
        <Route path="run/:id" element={<Run/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
        <Route path="/createRun" element={<ReDetails/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
