import React from 'react';
import './Service.css';
import Footer from '../../Components/Footer';
import service1 from '../../assets/serv1.png';
import service2 from '../../assets/serv2.png';
import service3 from '../../assets/serv3.png';
import service from '../../assets/aim121.png';

const Service = () => {
  return (
    <div className='serviceContainer'>
      <div className='serviceBox'>
        <div className='serv'>
          <img src={service} alt=""/>
        </div>
        {/* <div className='serviceBox1'>
          <h3>Future Kenya IT services</h3>
          <p>
            Our comprehensive suite of services encompasses
            Consulting, Training and Support, designed to
            empower you with the knowledge, skills, and
            assistance necessary to thrive in a rapidly evolving
            landscape
          </p>
        </div> */}
      </div>

      <div className='serviceBox2'>
        <div className='serviceBox3'>
          <img src={service1} alt="consulting"/>
        </div>

        <div className='serviceBox4'>
          <div>
            <h3>Consulting</h3>
            <p>
              Unleash the full potential of your business with our expert consulting services. Future Kenya's consultants bring a wealth of experience and industry insights to the table, guiding you through strategic decision-making, process optimization, and innovation. We collaborate closely with you to develop tailored solutions that drive growth and success. Complimented with our full understanding of software Implementation and development, we deliver a dynamic and robust solution meeting your business requirements. 
            </p>
            <a href="/Consulting">FIND OUT MORE ></a>
          </div>
        </div>
      </div>

      <div className='serviceBox2'>
        <div className='serviceBox3'>
          <img src={service3} alt="consulting"/>
        </div>

        <div className='serviceBox4'>
          <div className='serviceBox5'>
            <h3>Training</h3>
            <p>
              Stay ahead of the curve with our dynamic training programs. Future Kenya offers a diverse range of training modules designed to enhance your team's skills and knowledge. With specialized industry training, our programs are crafted to meet the demands of the modern workforce. Elevate your capabilities and foster a culture of continuous learning with Future Kenya's training solutions.
            </p>
            <a href="/Training">FIND OUT MORE ></a>
          </div>
        </div>
      </div>

      <div className='serviceBox2'>
        <div className='serviceBox3'>
          <img src={service2} alt="consulting"/>
        </div>

        <div className='serviceBox4'>
          <div className='serviceBox5'>
            <h3>Support</h3>
            <p>
              Your success is our priority, and our support services are here to ensure a smooth journey. Whether you need technical assistance, project support, or ongoing maintenance, Future Kenya provides dedicated support tailored to your specific requirements. Count on us to be your reliable partner, offering timely and effective solutions whenever you need them.
            </p>
            <a href="/Support">FIND OUT MORE ></a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Service