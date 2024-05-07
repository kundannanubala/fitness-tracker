// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchActivities = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/activities', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    const fetchGoals = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/goals', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGoals(response.data);
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
    };

    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/progress', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProgress(response.data);
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchUserData();
    fetchActivities();
    fetchGoals();
    fetchProgress();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
        </div>
      )}

      <h2>Recent Activities</h2>
      {activities.length > 0 ? (
        <ul>
          {activities.map((activity) => (
            <li key={activity._id}>
              <p>Activity Type: {activity.activityType}</p>
              <p>Duration: {activity.duration} minutes</p>
              <p>Date: {new Date(activity.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities logged yet.</p>
      )}

      <h2>Goals</h2>
      {goals.length > 0 ? (
        <ul>
          {goals.map((goal) => (
            <li key={goal._id}>
              <p>Goal Type: {goal.goalType}</p>
              <p>Target Value: {goal.targetValue}</p>
              <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No goals set yet.</p>
      )}

      <h2>Progress</h2>
      {progress.length > 0 ? (
        <ul>
          {progress.map((entry) => (
            <li key={entry._id}>
              <p>Date: {new Date(entry.date).toLocaleDateString()}</p>
              <p>Value: {entry.value}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No progress entries yet.</p>
      )}

      <div>
        <Link to="/activity">Log Activity</Link>
        <Link to="/goals">Set Goals</Link>
        <Link to="/progress">Track Progress</Link>
      </div>
    </div>
  );
};

export default Dashboard;