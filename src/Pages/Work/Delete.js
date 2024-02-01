
import './Work.css'
import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a request to obtain access token
    const accessTokenEndpoint = 'http://localhost/AcumaticaSciexDemo/identity/connect/token';
    const tokenResponse = await axios.post(accessTokenEndpoint, {
      // Add credentials if needed
    });

    const accessToken = tokenResponse.data.access_token;
    console.log(accessToken)

    // Prepare data to send to Acumatica endpoint
    const dataToSend = {
      Email: { value: formData.email },
      FirstName: { value: formData.firstName },
      LastName: { value: formData.lastName },
      UserInfo: {
        UserType: { value: 'portal Admin' },
        Login: { value: formData.username },
        GeneratePassword: { value: 'false' },
        Password: { value: formData.password },
      },
    };

    // Send data to Acumatica endpoint using obtained access token
    const sendDataEndpoint = 'http://localhost/AcumaticaSciexDemo/entity/Default/22.200.001/Contact?$expand=UserInfo,UserInfo/Roles&$select=Email,FirstName,LastName,UserInfo/Login,UserInfo/Password,UserInfo/GeneratePassword,UserInfo/UserType,UserInfo/Roles/RoleName,UserInfo/Roles/RoleDescription,UserInfo/Roles/Selected';
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.post(sendDataEndpoint, dataToSend, config);
      console.log('Data sent successfully:', response.data);
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className='workContainer'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Work email" />
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      </div>
  );
};

export default Delete;
