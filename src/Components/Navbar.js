import React, {useState} from 'react';
import './components.css'
import { Link } from 'react-router-dom';
import logo from '../assets/fkl1.png';
import { HiMiniBars3 } from "react-icons/hi2";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export const Navbar = () => {

const [showPopup, setShowPopup] = useState(false);
const [open, setOpen] = React.useState(false);
const [maxWidth, setMaxWidth] = React.useState('xl');

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleBarsClick = () => {
    setShowPopup(true);
};

const handleCloseClick = () => {
    setShowPopup(false);
};

  return (
    <div className="navbar">
        <div onClick={handleClickOpen} className='bars'>
            <HiMiniBars3 />
        </div>
        <div className="dialogPop">
            <Dialog
                open={open}
                maxWidth="md"
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent >
                <ul className='menupop'>
                <li className='ListLink'>
                    <Link to="/" className='link'>
                    Home
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Acumatica" className='link'>
                        Acumatica ERP
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Palladium" className='link'>
                        Palladium ERP
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Payspace" className='link'>
                        Payspace, HR & Payroll
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Service" className='link'>
                    Services
                    </Link>
                    {/* <ul>
                        <li className='sublinkList'>
                            <Link to="/Consulting">Consulting</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Training">Training</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Support">Support</Link>
                        </li>
                    </ul> */}
                </li>
                <li className='ListLink'>
                    <Link to="/Consulting" className='link'>
                        Consulting
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Training" className='link'>
                        Training
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Support" className='link'>
                        Support
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Career" className='link'>
                    Work at Future Kenya
                    </Link>
                    {/* <ul>
                        <li className='sublinkList'>
                            <Link to="/Career">Jobs</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Apply">Apply Now</Link>
                        </li>
                    </ul> */}
                </li>
                <li className='ListLink'>
                    <Link to="/Contact" className='link'>
                        Contact Us
                    </Link>
                </li>
                <li className='ListLink' style={{fontWeight: 'bold'}}>
                    <a
                    className='link'
                    href="https://acumatica.futurekenya.com/SelfServicePortal"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Self Service Portal
                    </a>
                </li>
                </ul>
                <div onClick={handleClose} className='xbtn'>
                    <div style={{
                        border: '1px solid grey',
                        borderRadius: '50%',
                        width: '30px', // Adjust size as needed
                        height: '30px', // Adjust size as needed
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        X
                    </div>
                </div>

                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose}>X</Button>
                </DialogActions> */}
            </Dialog>
        </div>
        {showPopup && (
        <div className='popup-overlay'>
            <div className='popup'>
                <ul className='menupop'>
                <li className='ListLink'>
                    <Link to="/" className='link'>
                    Home
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Acumatica" className='link'>
                        Acumatica ERP
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Palladium" className='link'>
                        Palladium ERP
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Payspace" className='link'>
                        Payspace, HR & Payroll
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Service" className='link'>
                    Services
                    </Link>
                    {/* <ul>
                        <li className='sublinkList'>
                            <Link to="/Consulting">Consulting</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Training">Training</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Support">Support</Link>
                        </li>
                    </ul> */}
                </li>
                <li className='ListLink'>
                    <Link to="/Consulting" className='link'>
                        Consulting
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Training" className='link'>
                        Training
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Support" className='link'>
                        Support
                    </Link>
                </li>
                <li className='ListLink'>
                    <Link to="/Career" className='link'>
                    Work at Future Kenya
                    </Link>
                    {/* <ul>
                        <li className='sublinkList'>
                            <Link to="/Career">Jobs</Link>
                        </li>
                        <li className='sublinkList'>
                            <Link to="/Apply">Apply Now</Link>
                        </li>
                    </ul> */}
                </li>
                <li className='ListLink'>
                    <Link to="/Contact" className='link'>
                        Contact Us
                    </Link>
                </li>
                <li className='ListLink' style={{fontWeight: 'bold'}}>
                    <a
                    className='link'
                    href="https://acumatica.futurekenya.com/SelfServicePortal"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Self Service Portal
                    </a>
                </li>
                </ul>
                <div onClick={handleCloseClick} className='xbtn'>X</div>
            </div>
            
        </div>
        )}
        <div className='navbarLogo'>
            <a href="/" style={{ marginLeft: '-2rem'}}>
                <img src={logo} alt="Future Kenya Logo" />
            </a>
        </div>
    </div>
  )
}
