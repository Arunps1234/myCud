import './App.css';
import Read from './Components/Read';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}></Route>
  <Route  path="/read" element={<Read/>}></Route>
  <Route path="/create" element={<Create/>}></Route>
<Route path="/Edit/:id" element={<Edit/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
