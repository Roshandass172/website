import React from 'react';
import { useHistory } from 'react-router-dom';

const RoleSelection = () => {
    const history = useHistory();

    const handleRoleSelection = (role) => {
        // Navigate to the respective page based on the role selected
        history.push(`/${role}`);
    };

    return (
        <div style={styles.container}>
            <h2>Select Your Role</h2>
            <button style={styles.button} onClick={() => handleRoleSelection('student')}>
                Student
            </button>
            <button style={styles.button} onClick={() => handleRoleSelection('teacher')}>
                Teacher
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: "'Algerian', serif",
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        margin: '10px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#1694c2',
        color: 'white',
        borderRadius: '5px',
    },
};

export default RoleSelection;
