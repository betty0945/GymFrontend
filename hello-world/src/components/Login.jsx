import React, { useState} from 'react';
import './Login.css';
import { FaUserCircle } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [identification, setIdentification] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/loginuser', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
      
            if (response.ok) {
              localStorage.setItem('token', data.token);
            } else {
              setError(data.message);
            }
          } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while logging in.');
          }
        };

        return (
            <div className='wrapper'>
                <form action="">
                    <h1>Login</h1>
                    {error && <p className="error-message">{error}</p>}
    
                    <div className='input-box'>
                        <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
                        <FaUserCircle className='icon' />
                    </div>
    
                    <div className='input-box'>
                        <input type='password' onChange={(e) => setPassword(e.target.value)}  placeholder='Password' required />
                        <RiLock2Fill className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type='identification' onChange={(e) => setIdentification(e.target.value)}  placeholder='Identification' required />
                    </div>
    
                    <div className='remember-forget'>
                        <label><input type='checkbox' />Remember Me</label>
                        <a href="#">Forgot password?</a>
                    </div>
    
                    <button type="submit" onClick={handleSubmit}>Login</button>
    
                    <div className='register-link'>
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                    
                </form>
            </div>
        );

    };


export default Login;
