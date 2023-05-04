import React, { useState } from 'react';

function OtpGenrator() {
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (/^(\+91|\+91\-|0)?[789]d{9}$/.test(mobile)) {
      fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mobile: mobile
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setMobile('');
          setMessage('OTP sent successfully!');
        } else {
          setMessage('Error sending OTP');
        }
      })
      .catch(error => {
        setMessage('Error sending OTP');
        console.error(error);
      });
    } else {
      setMessage('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Mobile:
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </label>
        <button type="submit">Get OTP</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default OtpGenrator;