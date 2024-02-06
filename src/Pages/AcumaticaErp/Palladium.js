import React from 'react';
import './AcumaticaErp.css';
import image7 from '../../assets/aim15.png';
import image8 from '../../assets/aim17.png';
import image9 from '../../assets/aim18.png';
import image10 from '../../assets/aim19.png';
import image11 from '../../assets/aim20.png';
import image12 from '../../assets/aim21.png';
import image13 from '../../assets/aim22.png';
import image14 from '../../assets/aim23.png';
import image15 from '../../assets/aim24.png';
import image17 from '../../assets/aim25.png';
import image18 from '../../assets/aim26.png';
import image19 from '../../assets/aim27.png';
import image20 from '../../assets/aim28.png';
import image21 from '../../assets/aim29.png';
import Footer from '../../Components/Footer';

const Palladium = () => {
  return (
    <div className='acumaticaContainer'>
      <div className="acumaticaContent1 two">
        <div className="imageContainer">
          <img src={image7} alt="acumatica logo" />
        </div>
        <p>
          Palladium Accounting Software offers a range of
          feature-rich Accounting Solutions to suit all types of
          organisations. It is developed on 3 core business
          success values of increasing turnover, optimizing
          margins and improving operational efficiency.
        </p>
        <div className='buttons'>
          <button classname="btn">Find out more</button>
          <button classname="btn">pricing</button>
        </div>
      </div>

      <div className="AccountContainer palladiumVersions">
        <div className='accountsSoftware'>
          <div className='software pallSoftware' style={{ backgroundImage: `url(${image10})` }}>
            <h3>Individual (Free)</h3>
            <p>
              Palladium Individual, offers full functionality 
              for a single user for free. 
              Features include the Invoicing of 
              Service Items and General Ledger 
              Recovery Accounts, with Customers, 
              Vendors and a full General Ledger. 
              Palladium Individual is perfect for single-user, 
              service based start-up businesses.
            </p>
            <button className='trial'>Trial</button>
          </div>
          <div className='software pallSoftware' style={{ backgroundImage: `url(${image9})` }}>
            <h3>Business </h3>
            <p>
              Palladium Business is aimed at smaller SMEs
              with up to 10 users. This option includes
              Profit centres, light Manufacturing in the form
              of Assembly, Multi-warehousing and much
              more, in addition to the features included in
              Palladium Individual. Palladium Business is
              perfect for small businesses that don’t require
              complex Manufacturing Management, Project
              Management or Point of Sale (POS) integration
            </p>
            <button>Trial</button>
          </div>
          <div className='software pallSoftware' style={{ backgroundImage: `url(${image8})` }}>
            <h3>Enterprise</h3>
            <p>
              Palladium Enterprise is a full Accounting & ERP
              solution that can accommodate an unlimited
              number of users. Features include all the functionality
              of Palladium Business, as well as: Projects, POS,
              Distribution, Pick Tickets, Manufacturing, Multi-currency,
              PO Approvals, Freehand Quotes and much more
            </p>
            <button>Trial</button>
          </div>
        </div>
      </div>

      <div className='pallContent'>
        <div className='pallContent1'>
          <div className='pallImage'>
            <img src={image12} alt=""/>
          </div>
          <div className='pallDesc'>
            <h3>Accounts Payable</h3>
            <p>
              Reduce admin, ensure vendors get paid on time and get an overview of where your business 
              is spending money with palladium's accounts payable software.
            </p>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallDesc'>
            <h3>Accounts Receivables</h3>
            <p>
              Manage customer accounts and improve collections with, simplified 
              credit management and approvals, order to invoice conversion, and tracking 
              receivables with comprehensive reporting.    
            </p>
          </div>
          <div className='pallImage'>
            <img src={image13} alt=""/>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallImage'>
            <img src={image14} alt=""/>
          </div>
          <div className='pallDesc'>
            <h3>General Ledger</h3>
            <p>
              Bring your financial information together in Palladium's General Ledger (GL). The GL gives 
              you instant access to financial data with comprehensive and flexible reporting.
            </p>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallDesc'>
            <h3>Fixed assests</h3>
            <p>
              Keep track of fixed assets and manage depreciation 
              calculations.
            </p>
          </div>
          <div className='pallImage'>
            <img src={image15} alt=""/>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallImage'>
            <img src={image11} alt=""/>
          </div>
          <div className='pallDesc'>
            <h3>Manufacturing & Assembly</h3>
            <p>
              Integrate production planning and WIP with sales 
              orders, inventory, warehousing, accounting, and reporting.
            </p>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallDesc'>
            <h3>Warehousing & Distribution</h3>
            <p>
              Powerful distribution and warehouse management that allows you to 
              manage bin locations, multiple warehouses, lots, inventory sub-items all 
              from one integrated ERP solution.
            </p>
          </div>
          <div className='pallImage'>
            <img src={image17} alt=""/>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallImage'>
            <img src={image18} alt=""/>
          </div>
          <div className='pallDesc'>
            <h3>Inventory</h3>
            <p>
              Efficiently manage your inventory to maximise profits and turnover.
            </p>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallDesc'>
            <h3>General</h3>
            <p>
              Powerful business finance & management software that is simple to use 
              but comprehensive enough to manage all aspects of your business.
            </p>
          </div>
          <div className='pallImage'>
            <img src={image19} alt=""/>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallImage'>
            <img src={image20} alt=""/>
          </div>
          <div className='pallDesc'>
            <h3>Point of sale, RST & SMS</h3>
            <p>
              Advanced ERP functionality to centralise all your data 
              in one solution, from data being created by mobile employees, and customer 
              messaging to sales at retail sites.
            </p>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallDesc'>
            <h3>Projects</h3>
            <p>
              Manage Projects With Full Project Cost & Revenue Tracking and Budgeting.
            </p>
          </div>
          <div className='pallImage'>
            <img src={image21} alt=""/>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Palladium