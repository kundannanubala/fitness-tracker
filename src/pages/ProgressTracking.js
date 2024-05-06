// ProgressTracking.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressTracking = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get('/api/progress');
        setProgress(response.data);
      } catch (error) {
        // Handle progress tracking error, e.g., display error message
      }
    };

    fetchProgress();
  }, []);

  return (
    <div>
      <h1>Progress Tracking</h1>
      {/* Display progress data */}
      {progress.map((item) => (
        <div key={item.id}>
          <p>Date: {item.date}</p>
          <p>Progress: {item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracking;