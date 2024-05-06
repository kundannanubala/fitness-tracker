// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/activity">Activity Logging</Link>
          </li>
          <li>
            <Link to="/goals">Goal Setting</Link>
          </li>
          <li>
            <Link to="/progress">Progress Tracking</Link>
          </li>
          <li>
            <Link to="/workouts">Workout Plans</Link>
          </li>
          <li>
            <Link to="/wearables">Wearable Integration</Link>
          </li>
          <li>
            <Link to="/nutrition">Nutrition Tracking</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;