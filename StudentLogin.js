import React from 'react';
import { useHistory } from 'react-router-dom';

const StudentLogin = () => {
    const history = useHistory();

    const handleYearSelect = (year) => {
        history.push(`/login?year=${year}`);
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2>Select Year</h2>
                <button onClick={() => handleYearSelect('II')}>II Year</button>
                <button onClick={() => handleYearSelect('III')}>III Year</button>
                <button onClick={() => handleYearSelect('IV')}>IV Year</button>
            </div>
        </div>
    );
};

const styles = {
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: "'Algerian', serif",
    },
    container: {
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        margin: '10px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#3261ce',
        color: 'white',
        borderRadius: '5px',
    },
};

export default StudentLogin;
