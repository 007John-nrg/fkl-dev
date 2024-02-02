import React from 'react'
import './HrPayroll.css'
import { FaCloudUploadAlt, FaIoxhost, FaCreditCard, FaTablet, FaExchangeAlt, FaHeart, FaGlobe, FaSyncAlt, FaConnectdevelop, FaLock } from 'react-icons/fa';
import payspace from '../../assets/payspace.jpg'
import Footer from '../../Components/Footer';
import { BsSendFill } from "react-icons/bs";

const FeatureColumn = ({ icon, color, title }) => {
  const IconComponent = icon;
  return (
    <div className="iconBox">
      <h4 className="iconComponent">
        <IconComponent style={{ fontSize: '40px', color }} />
        {' '}
        {title}
      </h4>
    </div>
  );
}

const HrPayroll = () => {
  return (
    <section className='payrollContainer'>

      <section className="containerTop">
        <div className="containerImage">
          <img src={payspace} alt="PaySpace Logo" width="270px" />
        </div>
      </section>

      <section class="containerFeatures">
        <div>
          <h4 style={{ textAlign: 'center', fontSize: '20px', fontWeight: '600', marginBottom: '25px' }}>
              <b>WHAT MAKES PAYSPACE PAYROLL & HR DIFFERENT?</b>
          </h4>
        </div>

        <div className="features">
          <div className="featurecontainer">
            <h4>
                Accessible for Your Business
            </h4>
          </div>
          <div className="featurecontainer">
            <h4>
                Stay Compliant with Regulations
            </h4>
          </div>
          <div className="featurecontainer">
            <h4>
                Redefine Your Time
            </h4>
          </div>
        </div>
      </section>

      <section className="featBox">
        <div className="row">
          <FeatureColumn icon={FaCloudUploadAlt} color="#64a953" title="100% Cloud-Based Payroll Software" />
          <div style={{width: '2px', height: "3rem", backgroundColor: '#0099FF'}}></div>
          <FeatureColumn icon={BsSendFill} color="#79c032" title="Multi-Country, Multi-Currency, Multi-Language Solution" />
          <div style={{width: '2px', height: "3rem", backgroundColor: '#0099FF'}}></div>
          <FeatureColumn icon={FaCreditCard} color="#64a953" title="Pay-As-You-Go Payments" />
        </div>
        <div className="row">
          <FeatureColumn icon={FaTablet} color="#64a953" title="Employee & Manager Self Service on Any Device" />
          <div style={{width: '2px', height: "3rem", backgroundColor: '#0099FF'}}></div>
          <FeatureColumn icon={FaExchangeAlt} color="#79c032" title="Configuration Replaces Customisation" />
          <div style={{width: '2px', height: "3rem", backgroundColor: '#0099FF'}}></div>
          <FeatureColumn icon={FaHeart} color="#64a953" title="Easy to Deploy and Maintain" />
        </div>
        <div className="row">
          <FeatureColumn icon={FaGlobe} color="#64a953" title="Anywhere, Anytime & Any Device Access" />
          <div style={{width: '2px', height: "3rem", backgroundColor: '#0099FF'}}></div>
          <FeatureColumn icon={FaSyncAlt} color="#79c032" title="Automatic built-in legislative & feature updates for 40+ African countries" />
          <div style={{width: '2px', height: "3rem", backgroundColor: '#0099FF'}}></div>
          <FeatureColumn icon={FaConnectdevelop} color="#64a953" title="Intelligent Workflow and Guidance" />
        </div>
        <div className="row">
          <FeatureColumn icon={FaIoxhost} color="#64a953" title="API Integration" />
          <div style={{width: '2px', height: "3rem", backgroundColor: '#0099FF'}}></div>
          <FeatureColumn icon={FaLock} color="#79c032" title="ISO 27001 Certified" />
          <div style={{width: '2px', height: "3rem", backgroundColor: '#0099FF'}}></div>
          <FeatureColumn icon={FaCloudUploadAlt} color="#64a953" title="No traditional payroll cycle & backup processes required" />
        </div>
      </section>

      <section className="table">
      <div className="tableContainer">
        <h4 className="title">PaySpace Product Comparison</h4>
        <hr />
        <table className="price-table">
          <thead>
            <tr>
              <th>Features</th>
              <th className="">Lite</th>
              <th className="">Premier</th>
              <th className="">Master</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>True cloud single instance multi-tenant</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            
          </tbody>
        </table>

        <table className="price-table">
          <thead>
            <tr>
              <th>Add-On Modules</th>
              <th className="">Lite</th>
              <th className="">Premier</th>
              <th className="">Master</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Recruitment</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>Recruitment</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>Recruitment</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
            <tr>
              <td>Recruitment</td>
              <td><span className="dot1"></span></td>
              <td><span className="dot2"></span></td>
              <td><span className="dot3"></span></td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </section>

      <Footer />
    </section>
);
}

export default HrPayroll