// import React from "react";

// const TopAgent = () => {
//   return <div>Top-Complaints</div>;
// };

// export default TopAgent;
// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const TopAgent: React.FC = () => {
//   const [formData, setFormData] = useState({
//     user_name: '',
//     user_email: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     emailjs.sendForm('service_ob9kf6c', 'template_bzhi6zx', e.target as HTMLFormElement, 'oxbla0EvffVQA4W9L')
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text);
//       });
//   };

//   return (
//     <div>
//       <h2>Send Message to us</h2>
//       <form onSubmit={sendEmail}>
//         <div>
//           <label>Name</label>
//           <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Message</label>
//           <textarea name="message" value={formData.message} onChange={handleChange} required />
//         </div>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default TopAgent;

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";

const TopAgent: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_ob9kf6c', 'template_bzhi6zx', e.target as HTMLFormElement, 'oxbla0EvffVQA4W9L')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setError(false);
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
        setError(true);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={3} boxShadow={3} borderRadius={2} bgcolor="#f9f9f9">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Send Message to us
        </Typography>
        <form onSubmit={sendEmail}>
          <TextField
            fullWidth
            label="Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="user_email"
            type="email"
            value={formData.user_email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Send
          </Button>
        </form>
        {success && <Alert severity="success" style={{ marginTop: '20px' }}>Message successfully sent!</Alert>}
        {error && <Alert severity="error" style={{ marginTop: '20px' }}>Failed to send message. Please try again.</Alert>}
      </Box>
    </Container>
  );
};

export default TopAgent;

