import { useState, useRef } from 'react';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from '@/styles/contact';
import { Snackbar } from '@mui/material';

const ContactsForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [open, setOpen] = useState(false); // Initialize Snackbar state
    const formRef = useRef(null); // Create a ref for the form
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('Sending...');
      
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('formData');
      console.log(formData);
      const data = await response.json();
      setStatus(data.message);
      setOpen(true); // Open Snackbar after submission
    };

    const handleCloseSnackbar = () => {
      setOpen(false); // Close the Snackbar
    };

    return (
        <Container>
          <Wrapper>
            <Title>Contact</Title>
            <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
            <ContactForm ref={formRef} onSubmit={handleSubmit}>
              <ContactTitle>Email Me 🚀</ContactTitle>
              <ContactInput placeholder="Your Email" name="email" onChange={handleChange} />
              <ContactInput placeholder="Your Name" name="name" onChange={handleChange} />
              <ContactInput placeholder="Subject" name="subject" onChange={handleChange} />
              <ContactInputMessage placeholder="Message" rows="4" name="message" onChange={handleChange} />
              <ContactButton type="submit" value="Send" />
            </ContactForm>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              message={status || "Email sent successfully!"} // Use status or default message
              severity="success"
            />
          </Wrapper>
        </Container>
      )
};

export default ContactsForm;
