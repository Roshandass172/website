import React, { useState } from 'react';

const OtpLogin = () => {
    const [username, setUsername] = useState('');
    const [otp, setOtp] = useState('');
    const [otpVisible, setOtpVisible] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSendOtp = (event) => {
        event.preventDefault();

        fetch('/send-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
        .then(response => response.json())
        .then(data => {
            setResponseMessage(data.message);
        })
        .catch(error => {
            setResponseMessage('Error sending OTP. Please try again.');
        });
    };

    const handleSubmitOtp = (event) => {
        event.preventDefault();

        if (otp.length === 6) { // Assuming a 6-digit OTP
            alert("OTP Submitted!");
            // Handle OTP submission logic here
        } else {
            alert("Invalid OTP. Please enter a 6-digit code.");
        }
    };

    const toggleOtpVisibility = () => {
        setOtpVisible(!otpVisible);
    };

    return (
        <div style={styles.loginContainer}>
            {/* Register Number Section */}
            <h2>Enter Your Register Number</h2>
            <form onSubmit={handleSendOtp}>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Register Number:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <input type="submit" value="Send OTP" style={styles.button} />
            </form>
            <p id="responseMessage">{responseMessage}</p>

            {/* OTP Section */}
            <h2>Enter OTP</h2>
            <form onSubmit={handleSubmitOtp}>
                <label htmlFor="otp">OTP:</label>
                <div style={styles.otpContainer}>
                    <input
                        type={otpVisible ? "text" : "password"}
                        id="otp"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <span onClick={toggleOtpVisibility} style={styles.toggleOtp}>
                        {otpVisible ? "🙈" : "👁️"}
                    </span>
                </div>
                <input type="submit" value="Submit OTP" style={styles.button} />
            </form>
        </div>
    );
};

const styles = {
    loginContainer: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: '500px',
        textAlign: 'center',
        margin: 'auto',
        marginTop: '100px',
    },
    formGroup: {
        marginBottom: '20px',
    },
    input: {
        width: '80%',
        padding: '8px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontFamily: "'Algerian', sans-serif",
    },
    otpContainer: {
        position: 'relative',
        display: 'inline-block',
        width: '80%',
    },
    toggleOtp: {
        position: 'absolute',
        right: '35px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        fontSize: '16px',
    },
    button: {
        width: '30%',
        padding: '5px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: "'Algerian', sans-serif",
        fontSize: '14px',
        marginTop: '20px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

export default OtpLogin;
