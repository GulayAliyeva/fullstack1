import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
      

        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('/db.json');
            const data = await response.json();
            const users = data.users;

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
              
             
           
                if (user.role === 'admin') {
          navigate("/admin-dashboard")
                } else {
                    navigate("/");
                }

                if (keepLoggedIn) {
                    localStorage.setItem('user', JSON.stringify({ username, role: user.role }));
                }
            } else {
                setError('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setError('Unable to verify user. Please try again later.');
        }
    };

    return (
        <div className={styles.loginForm}>
            <div className={styles.loginHeading}>
                <span>Login</span>
                <p>Enter Login details to get access</p>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <form onSubmit={handleSubmit} className={styles.inputBox}>
                <div className={styles.singleInputFields}>
                    <label>Username or Email Address</label>
                    <input
                        type="text"
                        placeholder="Username / Email address"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.singleInputFields}>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={`${styles.singleInputFields} ${styles.loginCheck}`}>
                    <input
                        type="checkbox"
                        id="keepLog"
                        checked={keepLoggedIn}
                        onChange={() => setKeepLoggedIn(!keepLoggedIn)}
                    />
                    <label htmlFor="keepLog">Keep me logged in</label>
                    <a href="#" className={styles.fRight}>Forgot Password?</a>
                </div>

                <div className={styles.loginFooter}>
                    <p>Don’t have an account? <a href="register.html">Sign Up</a> here</p>
                    <button className={styles.submitBtn3}>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
