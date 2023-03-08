import './App.css';
import Countries from './Components/Countries'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';


function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/Countries__Rest_API" element={<Countries/>} ></Route>
       <Route path="/:name" element={<CountryDetails/>}></Route>
     </Routes>
   </BrowserRouter>
   
  
  
  );
}

export default App;
