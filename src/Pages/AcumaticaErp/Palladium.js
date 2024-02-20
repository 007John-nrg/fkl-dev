import React, {useState} from 'react';
import './AcumaticaErp.css';
import HTMLFlipBook from 'react-pageflip';
import image7 from '../../assets/aim106.png';
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
import p from '../../assets/palladium/P/P_page-0001.jpg';
import p2 from '../../assets/palladium/P/P_page-0002.jpg';
import p3 from '../../assets/palladium/P/P_page-0003.jpg';
import p4 from '../../assets/palladium/P/P_page-0004.jpg';
import p5 from '../../assets/palladium/P/P_page-0005.jpg';
import p6 from '../../assets/palladium/P/P_page-0006.jpg';
import p7 from '../../assets/palladium/P/P_page-0007.jpg';
import p8 from '../../assets/palladium/P/P_page-0008.jpg';
import p9 from '../../assets/palladium/P/P_page-0009.jpg';
import p10 from '../../assets/palladium/P/P_page-0010.jpg';
import p11 from '../../assets/palladium/P/P_page-0011.jpg';
import p12 from '../../assets/palladium/P/P_page-0012.jpg';
import p13 from '../../assets/palladium/P(1)/P (1)_page-0001.jpg';
import p14 from '../../assets/palladium/P(1)/P (1)_page-0002.jpg';
import p15 from '../../assets/palladium/P(1)/P (1)_page-0003.jpg';
import p16 from '../../assets/palladium/P(1)/P (1)_page-0004.jpg';
import p160 from '../../assets/palladium/P(1)/P (1)_page-0005.jpg';
import p17 from '../../assets/palladium/P(1)/P (1)_page-0006.jpg';
import p18 from '../../assets/palladium/P(1)/P (1)_page-0007.jpg';
import p19 from '../../assets/palladium/P(2)/P (2)_page-0001.jpg';
import p20 from '../../assets/palladium/P(2)/P (2)_page-0002.jpg';
import p21 from '../../assets/palladium/P(2)/P (2)_page-0003.jpg';
import p22 from '../../assets/palladium/P(2)/P (2)_page-0004.jpg';
import p23 from '../../assets/palladium/palladimAcc/Palladium Accounting Summary Brochure_page-0001.jpg';
import p24 from '../../assets/palladium/palladimAcc/Palladium Accounting Summary Brochure_page-0002.jpg';
import p25 from '../../assets/palladium/palladimAcc/Palladium Accounting Summary Brochure_page-0003.jpg';
import p26 from '../../assets/palladium/palladimAcc/Palladium Accounting Summary Brochure_page-0004.jpg';
import p27 from '../../assets/palladium/pallapp/Palladium App Suite Brochure 2022_page-0001.jpg';
import p28 from '../../assets/palladium/pallapp/Palladium App Suite Brochure 2022_page-0002.jpg';
import p29 from '../../assets/palladium/pallapp/Palladium App Suite Brochure 2022_page-0003.jpg';
import p30 from '../../assets/palladium/pallfeat/Palladium Feature_page-0001.jpg';
import p31 from '../../assets/palladium/pallfeat/Palladium Feature_page-0002.jpg';
import p32 from '../../assets/palladium/pallfeat/Palladium Feature_page-0003.jpg';
import p33 from '../../assets/palladium/pallfeat/Palladium Feature_page-0004.jpg';
import p34 from '../../assets/palladium/pallfeat/Palladium Feature_page-0005.jpg';
import p35 from '../../assets/palladium/pallfeat/Palladium Feature_page-0006.jpg';
import p36 from '../../assets/palladium/pallpay/Palladium Pay_page-0001.jpg';
import p37 from '../../assets/palladium/pallpay/Palladium Pay_page-0002.jpg';
import p38 from '../../assets/palladium/pallpay/Palladium Pay_page-0003.jpg';
import p39 from '../../assets/palladium/pallpay/Palladium Pay_page-0004.jpg';
import p40 from '../../assets/palladium/palladiumAccount.jpg'
import { Link } from 'react-router-dom';
import Pall from '../../pall';

const Palladium = () => {
  const [popupImages, setPopupImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const P11 = [p, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
  const P22 = [p13, p14, p15, p16, p160, p17, p18];
  const P33 = [p19, p20, p21, p22];
  const P44 = [p23, p24, p25, p26];
  const P55 = [p27, p28, p29];
  const P66 = [p30, p31, p32, p33, p34, p35];
  const P77 = [p36, p37, p38, p39];
  const P88 = [p40]

  const handleEyeIconClick = (category) => {
    let selectedImages;
    switch (category) {
        case 'P11':
            selectedImages = P11;
            break;
        case 'P22':
            selectedImages = P22;
            break;
        case 'P33':
            selectedImages = P33;
            break;
        case 'P44':
            selectedImages = P44;
            break;
        case 'P55':
            selectedImages = P55;
            break;
        case 'P66':
            selectedImages = P66;
            break;
        case 'P77':
            selectedImages = P77;
            break;
        case 'P88':
            selectedImages = P88;
            break;
        default:
            selectedImages = [];
    }
    setPopupImages(selectedImages);
    setShowPopup(true);
};

  return (
    <div className='acumaticaContainer pallCont'>
      <div className="aside" style={{overflowY: 'auto'}}>
      {/* {[
            { image: P11[0], category: 'P11' },
            { image: P22[0], category: 'P22' },
            { image: P33[0], category: 'P33' },
            { image: P44[0], category: 'P44' },
            { image: P55[0], category: 'P55' },
            { image: P66[0], category: 'P66' },
            { image: P77[0], category: 'P77' },
            { image: P88[0], category: 'P88' },
        ].map((item, index) => (
            <div key={index}>
                <div className="imgpally img-body" style={{marginTop: '3rem', width: '150px'}}>
                    <img src={item.image} alt="portfolio image" />
                    <div className="img-overlay">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={() => handleEyeIconClick(item.category)}><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                    </div>
                </div>
            </div>
        ))}
          {showPopup && (
            <div className="popup-overlay">
                <div className="popup">
                    <button onClick={() => setShowPopup(false)}>X</button>
                    <div className="flipbook-container">
                        <HTMLFlipBook width={575} height={700}>
                            {popupImages.map((image, index) => (
                                <div className="page" key={index}>
                                    <img src={image} alt={`popup image ${index}`} />
                                </div>
                            ))}
                        </HTMLFlipBook>
                    </div>
                </div>
            </div>
            )} */}
            <Pall />
      </div>

      <div style={{width: '80%'}} className="acumaticaContent1 two">
        <div className="imageContainer imgPall">
          <img src={image7} alt="palladium logo" />
        </div>
        <p>
          Palladium Accounting Software offers a range of
          feature-rich Accounting Solutions to suit all types of
          organisations. It is developed on 3 core business
          success values of increasing turnover, optimizing
          margins and improving operational efficiency.
        </p>
        <div className='buttons'>
          <Link className="btnPal" to="/Contact">GET A QUOTE</Link>
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
              is spending money with Palladium's accounts payable software.
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
            <img src={image18} alt=""/>
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
            <img src={image21} alt=""/>
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
            <img src={image14} alt=""/>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallImage'>
            <img src={image15} alt=""/>
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
            <img src={image17} alt=""/>
          </div>
        </div>

        <div className='pallContent1'>
          <div className='pallImage'>
            <img src={image19} alt=""/>
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
            <img src={image20} alt=""/>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Palladium