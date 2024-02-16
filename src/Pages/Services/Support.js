import React from 'react';
import './Service.css';
import image1 from '../../assets/aim107.png';
import image2 from '../../assets/aim108.png';
import image3 from '../../assets/aim109.png';
import image4 from '../../assets/aim110.png';
import image5 from '../../assets/aim116.png';
import image6 from '../../assets/aim117.png';
import image7 from '../../assets/aim118.png';
import image8 from '../../assets/aim119.png';
import image9 from '../../assets/aim120.png';

const Support = () => {
  return (
    <div className='serviceContainer supportContainer'>
      <div className="consultingContent supportContent">
        <div className="imageContainer consultingImage">
          <img src={image1} alt="acumatica consulting logo" />
        </div>
        
        <div className="consultingText">
          <p>
            At Future Kenya, we understand that seamless operation of your IT infrastructure is paramount to your business success. That's why we offer comprehensive support services designed to keep your systems running smoothly and efficiently. Our team of experienced IT professionals is dedicated to providing timely assistance and resolving any issues that may arise, ensuring minimal downtime and maximum productivity for your organization. Whether you need help troubleshooting technical issues, implementing software updates, or optimizing system performance, we're here to help.
          </p>
        </div>

        <div className="consultingIcons supportIcons">
          <div className="content1">
            <img src={image2} alt="" />
            <p>Online support</p>
          </div>
          <div className="content1">
            <img src={image3} alt="" />
            <p>Offline Support</p>
          </div>
          <div className="content1">
            <img src={image4} alt="" />
            <p>Onsite support</p>
          </div>
        </div>
      </div>

      <div className="packages">
        <div className='packagesBox'>
          <img src={image6} alt="" />
        </div>
        <div className='packagesBox'>
          <img src={image7} alt="" />
        </div>
        <div className='packagesBox'>
          <img src={image8} alt="" />
        </div>
        <div className='packagesBox'>
          <img src={image9} alt="" />
        </div>
        {/* <div className='packagesBox zeroo'>
          <div className='packageContent'>
            <h3>Annual license fees only</h3>
            <ul>
              <li>
                Software Updates (not installed)
              </li>
              <li>
                Upgrades to New Versions (not installed)
              </li>
              <li>
                Telephone and Email Support (issue introduction only – resolution is charged separately)
              </li>
              <li>
                Registration & Annual Renewal
              </li>
              <li>
                Access to Customer Support portal
              </li>
            </ul>
          </div>
          <div>
            <button className='buttonContainer'>Basic</button>
          </div>
        </div>
        <div className='packagesBox onea'>
          <div className='packageContent'>
            <h3>SLA Service Level Agreement Partial</h3>
            <p>All the services of our <span className='Basic'>Basic</span> Support Program</p>
            <ul>
              <li>
                Telephonic and Email support via the Help Desk
              </li>
              <li>
                Remote support via the Help Desk
              </li>
              <li>
                On-site support
              </li>
              <li>
                Implemented System Application Maintenance 
              </li>
              <li>
                General support and health checks, 
              </li>
              <li>
                Software Changes to incorporate industry, legal or regulatory changes within parameters and SLA hours (within limit).
              </li>
              <li>
                Enhancements to the software that can be implemented across the Customer-base – Enhancement Request (ER)
              </li>
              <li>
                Report Maintenance
              </li>
              <li>
                Training on Upgrade New Features
              </li>
              <li>
                Software Updates to installed version installed 
              </li>
              <li>
                Upgrades to New Versions installed (1 version Prior)
              </li>
              <li>
                Upgrades to New Versions installed (2+ version Prior)
              </li>
              <li>
                Data Conversion to new version installed
              </li>
              <li>
                Clearing the Data error reports
              </li>
              <li>
                Registration and Annual Renewal
              </li>
              <li>
                Support on integration scenarios
              </li>
            </ul>
          </div>
          <div>
            <button className='buttonContainer'>Standard</button>
          </div>
        </div>
        <div className='packagesBox twob'>
          <div className='packageContent'>
            <h3>Service Level agreement complete Extended scope partial</h3>
            <p>All services of our <span className='Basic'>Basic</span> and <span className='Standard'>Standard</span> support programmes</p>
            <ul>
              <li>
                Support on integration scenarios
              </li>
              <li>
                Repetitive Clarification and Training in Non-Core areas
              </li>
              <li>
                Desktop and Networking related issues
              </li>
              <li>
                Layout Design Amendments
              </li>
              <li>
                SQL Server support - automatic backups, sql scripts
              </li>
              <li>
                Conducting year end and month end procedures
              </li>
              <li>
                Re-installation of software or new installations caused by new purchases or third party problems 
              </li>
              <li>
                Re-installation after malicious damage/sabotage/access by unauthorized persons/trial and error knowledge
              </li>
            </ul>
          </div>
          <div>
            <button className='buttonContainer'>Technology</button>
          </div>
        </div>
        <div className='packagesBox threec'>
          <div className='packageContent'>
            <h3>Extended Scope Complete</h3>
            <p>All services of our <span className='Basic'>Basic</span>, <span className='Standard'>Standard</span> and <span>Technology</span> support programmes</p>
            <ul>
              <li>
                Accounting and Auditing Assistance
              </li>
              <li>
                System Administration and Access Rights
              </li>
              <li>
                Balances and Reconciliation Assistance
              </li>
              <li>
                Minor and Quick Customizations
              </li>
              <li>
                ISP and Web Server Services Support
              </li>
              <li>
                Creating new or ad-hoc reports.
              </li>
              <li>
                Business Intelligence Reports
              </li>
              <li>
                Multi-Company Assistance (more than 1 database support)
              </li>
              <li>
                Peripheral Updates to environment and Windows OS - Dot Net, Service Packs
              </li>
              <li>
                MS-SQL Server software maintenance and features configuration.
              </li>
              <li>
                Peripheral Server Support - DHCP, AD, Server OS
              </li>
              <li>
                3rd Party liaison on associated environment/infrastructure - ETR, ESD, ISP
              </li>
              <li>
                Retail - Business Critical Point of Sale - 24x7x365
              </li>
              <li>
                Core Training on the phone or email.
              </li>
              <li>
                Consulting and Design Setup of the System. Bespoke changes or system enhancements
              </li>
              <li>
                Virus checking and cleaning and PC maintenance
              </li>
              <li>
                Hardware Failure and Hardware support.
              </li>
              <li>
                Data recovery after a system failure/crash.
              </li>
              <li>
                Backup and data security, Data fixes after power failure due to lack of stable UPS/Generators.
              </li>
              <li>
                Facilitation of workshops and general consulting
              </li>
              <li>
                Accounting training
              </li>
              <li>
                Complex or large data fixes
              </li>
            </ul>
          </div>
          <div>
            <button className='buttonContainer'>Premium</button>
          </div>
        </div> */}
      </div> 

    </div>
  )
}

export default Support