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
import Jobs from './Pages/Work/Jobs';
import Apply from './Pages/Work/Apply';
import Acumatica from './Pages/AcumaticaErp/Acumatica';
import Palladium from './Pages/AcumaticaErp/Palladium';
import Construction from './Pages/AcumaticaErp/Construction';
import { Distribution } from './Pages/AcumaticaErp/Distribution';
import Manufacturing from './Pages/AcumaticaErp/Manufacturing';
import Commerce from './Pages/AcumaticaErp/Commerce';
import General from './Pages/AcumaticaErp/General';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AcumaticaErp" element={<AcumaticaErp />} />
          <Route path="Acumatica" element={<Acumatica />} />
          <Route path="Construction" element={<Construction />} />
          <Route path="Distribution" element={<Distribution />} />
          <Route path="Manufacturing" element={<Manufacturing />} />
          <Route path="Commerce" element={<Commerce />} />
          <Route path="General" element={<General />} />
          <Route path="Palladium" element={<Palladium />} />
          <Route path="Service" element={<Service />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Payspace" element={<HrPayroll />} />
          <Route path="Career" element={<Work />} />
          <Route path="Contact" element={<Contact />} />  
          <Route path="delete" element={<Delete />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="Apply" element={<Apply />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
