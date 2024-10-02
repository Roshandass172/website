import React, { useState } from 'react';

const IIIYearLogin = () => {
    const [registerNumber, setRegisterNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleIIIYearLogin = (event) => {
        event.preventDefault();
        const loggedInRegisterNumbers = JSON.parse(localStorage.getItem("loggedInRegisterNumbersIII")) || [];

        if (!loggedInRegisterNumbers.includes(registerNumber)) {
            if (registerNumber >= '310622243001' && registerNumber <= '310622243067') {
                loggedInRegisterNumbers.push(registerNumber);
                localStorage.setItem("loggedInRegisterNumbersIII", JSON.stringify(loggedInRegisterNumbers));
                window.location.href = "post-selection"; // Redirect to voting page
            } else {
                setErrorMessage('Invalid register number. Please enter a valid one.');
            }
        } else {
            setErrorMessage('You are already logged in.');
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.headerText}>III Year Login</div>
            <div style={styles.container}>
                <form onSubmit={handleIIIYearLogin}>
                    <div style={styles.form}>
                        <label htmlFor="registerNumber">Register Number:</label>
                        <input
                            type="text"
                            id="registerNumber"
                            name="registerNumber"
                            required
                            value={registerNumber}
                            onChange={(e) => setRegisterNumber(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {errorMessage && <p style={styles.error}>{errorMessage}</p>}
            </div>
        </div>
    );
};

const styles = {
    body: {
        margin: 0,
        fontFamily: "'Times New Roman', serif",
        height: '100vh',
        backgroundImage: "url('robo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    headerText: {
        fontFamily: "'Algerian', serif",
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '20px',
    },
    container: {
        border: '2px solid #ddd',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    error: {
        color: 'red',
    },
};

export default IIIYearLogin;
