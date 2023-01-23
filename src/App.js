
import './App.css';
import Adult from './Component/Adult';
import Bollywood from './Component/Bollywood';
import Hollywood from './Component/Hollywood';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
import Freddy from './Component/Freddy';
import Modal from './Component/Modal';
import Darji from './Component/Darji';
import Modal1 from './Component/Modal1';
import Dhokha from './Component/Dhokha';
import Modal2 from './Component/Modal2';
import Modal3 from './Component/Modal3';
import Kuttey from './Component/Kuttey';
import Modal4 from './Component/Modal4';
import Modal5 from './Component/Modal5';
import Againsttheice from './Component/Againsttheice';
function App() {

  return (
    <div className="App">
    <Navbar/>   


    <BrowserRouter>
    <Routes>
 
    <Route path="/" element={<Home />} exact/>
    <Route path="hollywood" element={<Hollywood /> } exact />
    <Route path="bollywood" element={<Bollywood />} exact />
    <Route path="adult" element={<Adult />} exact />
    <Route path="page1" element={<Page1 />} exact />
    <Route path="page2" element={<Page2 />} exact />
    <Route path="page3" element={<Page3 />} exact />
    <Route path="Freddy" element={<Freddy />} exact />
    <Route path="Modal" element={<Modal />} exact />
    <Route path="Darji" element={<Darji />} exact />
    <Route path="Modal1" element={<Modal1 />} exact />
    <Route path="Modal2" element={<Modal2 />} exact />
    <Route path="Dhokha" element={<Dhokha />} exact />
    <Route path="Modal3" element={<Modal3 />} exact />
    <Route path="Kuttey" element={<Kuttey />} exact />
    <Route path="Modal4" element={<Modal4 />} exact />
    <Route path="Modal5" element={<Modal5 />} exact />
    <Route path="Againsttheice" element={<Againsttheice />} exact />
     </Routes>
    
    </BrowserRouter>

   




    </div>
  );
}

export default App;
