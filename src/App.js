import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu'
import Home from './Pages/Home/Home';
import AcumaticaErp from './Pages/AcumaticaErp/AcumaticaErp';
import Service from './Pages/Services/Service';
import HrPayroll from './Pages/HrPayroll/HrPayroll';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import Work from './Pages/Work/Work';


import Delete from './Pages/Work/Delete';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AcumaticaErp" element={<AcumaticaErp />} />
          <Route path="Service" element={<Service />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Payspace" element={<HrPayroll />} />
          <Route path="Career" element={<Work />} />
          <Route path="Contact" element={<Contact />} />  
          <Route path="deleteTest" element={<Delete />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
