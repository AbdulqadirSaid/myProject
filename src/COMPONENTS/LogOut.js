import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data from local storage or session storage
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to the login page
        navigate('/login'); // Adjust the path to your login page
    };

    return (
        <div className="logout-container">
            <button className="logout-button" onClick={handleLogout}>
                Log Out
            </button>
        </div>
    );
};

export default LogOut;
