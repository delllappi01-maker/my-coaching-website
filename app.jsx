import React, { useState } from 'react';

function App() {
  // State variables for Login System
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');

  // Function to simulate sending OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      setIsOtpSent(true);
      alert(`Testing OTP sent to ${mobileNumber}! Use OTP: 1234`);
    } else {
      alert('Please enter a valid 10-digit mobile number.');
    }
  };

  // Function to verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === '1234') {
      setIsLoggedIn(true);
      alert('Login Successful!');
    } else {
      alert('Wrong OTP! Please use 1234 for testing.');
    }
  };

  return (
    <div>
      {/* Top Header/Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">📚 MY COACHING</a>
          <span className="navbar-text text-white">
            {isLoggedIn ? `Welcome, Student!` : 'Guest Mode'}
          </span>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container my-5" style={{ maxWidth: '500px' }}>
        
        {/* IF NOT LOGGED IN: Show Login Form */}
        {!isLoggedIn ? (
          <div className="card shadow border-0 p-4">
            <h3 className="fw-bold text-center mb-4 text-primary">Student Login</h3>
            
            {/* Step 1: Ask for Mobile Number */}
            {!isOtpSent ? (
              <form onSubmit={handleSendOtp}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Enter Mobile Number</label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="9876543210"
                      maxLength="10"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                      required 
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold">Send OTP</button>
              </form>
            ) : (
              /* Step 2: Ask for OTP (Appears after clicking Send OTP) */
              <form onSubmit={handleVerifyOtp}>
                <div className="mb-3">
                  <label className="form-label fw-bold text-success">OTP sent to +91 {mobileNumber}</label>
                  <input 
                    type="text" 
                    className="form-control text-center fw-bold fs-4" 
                    placeholder="X X X X"
                    maxLength="4"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    required 
                  />
                  <small className="text-muted d-block mt-1 text-center">Hint: Enter 1234 to login</small>
                </div>
                <button type="submit" className="btn btn-success w-100 fw-bold mb-2">Verify & Login</button>
                <button type="button" className="btn btn-link w-100 btn-sm text-secondary" onClick={() => setIsOtpSent(false)}>Change Mobile Number</button>
              </form>
            )}
          </div>
        ) : (
          /* IF LOGGED IN: Show Student Dashboard */
          <div className="card shadow border-0 p-4 bg-light text-center">
            <h3 className="fw-bold text-success mb-3">🎉 Welcome to Student Dashboard</h3>
            <p className="lead">You have successfully logged in via OTP!</p>
            
            <div className="border rounded p-3 bg-white text-start my-3">
              <h5><strong>Your Batches:</strong></h5>
              <ul>
                <li>Target JEE / NEET 2026</li>
                <li>Weekly Mock Test Series</li>
              </ul>
            </div>

            <button className="btn btn-danger fw-bold mt-3" onClick={() => { setIsLoggedIn(false); setIsOtpSent(false); setOtp(''); setMobileNumber(''); }}>
              Logout
            </button>
          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 fixed-bottom">
        <p className="mb-0">&copy; 2026 My Coaching Institute. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
