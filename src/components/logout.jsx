import React, { useEffect } from 'react';

const Logout = () => {

    useEffect(() => {
        localStorage.removeItem('email');
        window.location= '/';
    }, []);

    return (<h3>Logging out...</h3>);
}
 
export default Logout;