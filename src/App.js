import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu'
import Home from './Pages/Home/Home';
import AcumaticaErp from './Pages/AcumaticaErp/AcumaticaErp';
import Service from './Pages/Services/Service';
import HrPayroll from './Pages/HrPayroll/HrPayroll';
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
import Consulting from './Pages/Services/Consulting';
import Training from './Pages/Services/Training';
import Support from './Pages/Services/Support';
import Test from '../src/Test'
import Test2 from './Test2';

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
          <Route path="Payspace" element={<HrPayroll />} />
          <Route path="Career" element={<Work />} />
          <Route path="Contact" element={<Contact />} />  
          <Route path="delete" element={<Delete />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="Apply" element={<Apply />} />
          <Route path="Consulting" element={<Consulting />} />
          <Route path="Training" element={<Training />} />
          <Route path="Support" element={<Support />} />
          <Route path="test" element={<Test />} />
          <Route path="test2" element={<Test2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
