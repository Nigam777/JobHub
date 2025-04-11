import React, { useState } from 'react'
import { Modal, Button, TextInput, PasswordInput } from '@mantine/core';
    
const ResetPassword = ({ opened, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserServices.resetPassword(formData);



   
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Modal opened={opened} onClose={onClose} title="Reset Password">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="Your email"
            type="email"
            withAsterisk
            name="email"
            value={formData.email}
            onChange={handleChange}
            mb="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            withAsterisk
            name="password"
            value={formData.password}
            onChange={handleChange}
            mb="md"
          />
          <Button className='bg-bright-sun-400 text-white' type="submit" fullWidth>
            Reset Password
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default ResetPassword;


