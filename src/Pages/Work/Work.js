import React, {useState} from 'react';
import './Work.css'
import image1 from '../../assets/aim777.png'
import Footer from '../../Components/Footer';
import implement from '../../assets/Implementation ERP consultant.pdf';
import it from '../../assets/IT Programmer and Web Developer.pdf';
import sales from '../../assets/Sales and Marketing Specialist .pdf';
import hr from  '../../assets/Human Resources (HR), HelpDesk and Operations Officer.pdf';
import accounts from '../../assets/Accounting Software Implementations and support Trainee .pdf';
import { Navbar } from '../../Components/Navbar';

const Work = () => {

  const [showImplementPopup, setShowImplementPopup] = useState(false);
  const [showITPopup, setShowITPopup] = useState(false);
  const [showSalesPopup, setShowSalesPopup] = useState(false);
  const [showHRPopup, setShowHRPopup] = useState(false);
  const [showAccountsPopup, setShowAccountsPopup] = useState(false);
  const [showImplementMessage, setShowImplementMessage] = useState(false);
  const [showItMessage, setShowItMessage] = useState(false);
  const [showSoftwareMessage, setShowSoftwareMessage] = useState(false);
  const [showSalesMessage, setShowSaleMessage] = useState(false);
  const [showHrMessage, setShowHrMessage] = useState(false);

  const emailAddress = 'hr@futurekenya.com';

  const handleImplementClick = () => {
    setShowImplementMessage(true);
  };

  const handleItClick = () => {
    setShowItMessage(true)
  };

  const handleAccountsClick = () => {
    setShowSoftwareMessage(true);
  };

  const handleSalesClick = () => {
    setShowSaleMessage(true);
  };

  const handleHrClick = () => {
    setShowHrMessage(true);
  };

    // Define event handlers for each role's popup
    const handleImplementPopup = () => {
      setShowImplementPopup(true);
      console.log("show", showImplementPopup)
    };
  
    const handleITPopup = () => {
      setShowITPopup(true);
    };
  
    const handleSalesPopup = () => {
      setShowSalesPopup(true);
    };
  
    const handleHRPopup = () => {
      setShowHRPopup(true);
    };
  
    const handleAccountsPopup = () => {
      setShowAccountsPopup(true);
    };

    const handleClosePopups = () => {
      setShowImplementPopup(false);
      setShowITPopup(false);
      setShowSalesPopup(false);
      setShowHRPopup(false);
      setShowAccountsPopup(false);

      console.log(showAccountsPopup, showSalesPopup, showImplementPopup, showITPopup, showHRPopup)
    };

  return (
    <div>
      <Navbar />
    <div className='workContainer'>
      <div className="workContent">
        <div className="imageContainer workImage">
          <img src={image1} alt="career logo" />
        </div>

        <div className="workText">
          <p>
            As a leading IT solutions company, Future Kenya adopts a culture that fosters creativity, collaboration and continuous learning. We empower our employees to unleash their full potential and thrive in a dynamic and supportive environment.
          </p>
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="workApply">
          <div className="workBox">
            <h3>Implementation ERP consultant</h3>
            <p>
              Join our team at Future Kenya as an Implementation ERP Consultant, where you'll oversee revenue coordination, management, and reconciliation accounting to ensure quality and timely services for small businesses. Responsibilities include accounting, billing, client care, financial reporting, and more. The ideal candidate holds a CPA/ACCA/Finance/Accounting qualification, has relevant computer training, and at least 2 years of experience in a similar role. If you're a proactive problem-solver with excellent communication skills and a strong understanding of accounting principles, we invite you to apply.
            </p>
            <div className="applyBtn">
              <button className='btn' onClick={handleImplementClick}>
                APPLY NOW
              </button>
              <div className="role" onClick={handleImplementPopup}>
                The Role
              </div>
              {showImplementPopup && (
                  <div className="popup-overlay">
                      <div className="popup">
                          <button className='btnPop' onClick={handleClosePopups}>X</button>
                          <embed width="100%" height="100%" src={implement}></embed>
                      </div>
                  </div>
              )}
            </div>
            {showImplementMessage && (
              <p>To apply for this position please send your CV and cover letter to <a href={`mailto:${emailAddress}`}>
                hr@futurekenya.com
                </a>
              </p>
            )}
          </div>

          <div className="workBox">
            <h3>IT Programmer and Web Developer</h3>
            <p>
            Join our team at Future Kenya as an IT Programmer and Web Developer, where you'll utilize your skills to build websites for small to large businesses. Responsibilities include development in .Net, C#, and SQL with a focus on backend development. The ideal candidate is proficient in ASP.NET, web development concepts, SQL Server, and IIS configuration. Qualifications include a Bachelor’s degree in Computer Science or Engineering, development experience, and proficiency in ASP.Net, C#, Microsoft SQL Server, HTML, WordPress, PHP, HTML, CSS, and JavaScript. If you're passionate about web development and possess strong technical and communication skills, we encourage you to apply.
            </p>
            <div className="applyBtn">
              <button className='btn' onClick={handleItClick}>
                APPLY NOW
              </button>
              <div className="role" onClick={handleITPopup}>
                The Role
              </div>
              {showITPopup && (
                  <div className="popup-overlay">
                      <div className="popup">
                          <button className='btnPop' onClick={handleClosePopups}>X</button>
                          <embed width="100%" height="100%" src={it}></embed>
                      </div>
                  </div>
              )}
            </div>
            {showItMessage && (
              <p>To apply for this position please send your CV and cover letter to <a href={`mailto:${emailAddress}`}>
                hr@futurekenya.com
                </a>
              </p>
            )}
          </div>

          <div className="workBox">
            <h3>Accounting Software Implementations and Support Trainee</h3>
            <p>
            As an Accounting Software Implementations and Support Trainee you'll play a crucial role in delivering and implementing ERP (Enterprise Resource Planning) Solutions, focusing on accounting. Responsibilities include software implementation, training, accreditation, client care, and project management. The ideal candidate holds a CPA/ACCA/Finance/Accounting qualification, has strong communication skills, and is passionate about accounting and software packages. If you're a recent graduate seeking a career-defining opportunity and are ready to start your journey in the accounting software field, we encourage you to apply.
            </p>
            <div className="applyBtn">
              <button className='btn' onClick={handleAccountsClick}> 
                APPLY NOW
              </button>
              <div className="role" onClick={handleAccountsPopup}>
                The Role
              </div>
              {showAccountsPopup && (
                <div className="popup-overlay">
                  <div className="popup">
                    <button className='btnPop' onClick={handleClosePopups}>X</button>
                    <div className="iframe-container">
                      <iframe className="responsive-iframe" src={accounts} title="Accounts" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showSoftwareMessage && (
              <p>To apply for this position please send your CV and cover letter to <a href={`mailto:${emailAddress}`}>
                hr@futurekenya.com
                </a>
              </p>
            )}
          </div>

          <div className="workBox">
            <h3>Sales and Marketing Specialist</h3>
            <p>
              Join our dynamic team at Future Kenya as a Sales and Marketing Specialist. In this role, you will actively seek out and engage customer prospects, providing tailored solutions to boost revenue growth, customer acquisition, and profitability. Responsibilities include identifying emerging markets, presenting products/services, conducting needs analysis, and maintaining positive customer relationships. Qualifications include a diploma or degree in sales and marketing (preferred), strong communication and negotiation skills, proficiency in Microsoft Office, and a passion for sales. If you're a motivated individual with a drive for sales excellence, we encourage you to apply.
            </p>
            <div className="applyBtn">
              <button className='btn' onClick={handleSalesClick}>
                APPLY NOW
              </button>
              <div className="role" onClick={handleSalesPopup}>
                The Role
              </div>
              {showSalesPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <button className='btnPop' onClick={handleClosePopups}>X</button>
                        <embed width="100%" height="100%" src={sales}></embed>
                    </div>
                </div>
              )}
            </div>
            {showSalesMessage && (
              <p>To apply for this position please send your CV and cover letter to <a href={`mailto:${emailAddress}`}>
                hr@futurekenya.com
                </a>
              </p>
            )}
          </div>

          <div className="workBox">
            <h3>HR</h3>
            <p>
              Future Kenya is seeking a dedicated and dynamic individual to join our team as a Human Resources (HR), Helpdesk, and Operations Officer. In this multifaceted role, you'll serve as a critical link between clients, employees, and management, ensuring seamless communication and efficient service delivery. If you're passionate about building a positive work environment and driving operational excellence, we encourage you to apply.
            </p>
            <div className="applyBtn">
              <button className='btn' onClick={handleHrClick}>
                APPLY NOW
              </button>
              <div className="role" onClick={handleHRPopup}>
                The Role
              </div>
              {showHRPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <button className='btnPop' onClick={handleClosePopups}>X</button>
                        {/* <iframe width="100%" height="100%" src={hr} /> */}
                        <embed width="100%" height="100%" src={hr}></embed>
                    </div>
                </div>
              )}
            </div>
            {showHrMessage && (
              <p>To apply for this position please send your CV and cover letter to <a href={`mailto:${emailAddress}`}>
                hr@futurekenya.com
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  )
}

export default Work