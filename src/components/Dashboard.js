import React from 'react';
import './Dash.css'; // Ensure this CSS file is created and imported
import profile from '../images/profile.jpg'; // Replace with your profile image path

function App() {
    return (
        <div className="container-fluid">
            <div className="mt-4 container">
                <div className="row dashboard-container">
                    <div className="col-md-3 col-lg-2 sidebar">
                        <nav>
                            <div className="profile-section text-center">
                                <img src={profile} alt="Profile" className="profile-img" />
                                <p className="profile-name">Logesh Hari</p>
                                <p className="profile-email">gm.logeshhari2003@gmail.com</p>
                            </div>
                            <ul className="nav flex-column text-center">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Analytics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Task List</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tracking</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Settings</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
