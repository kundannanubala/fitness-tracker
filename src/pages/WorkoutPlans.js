// WorkoutPlans.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutPlans = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      try {
        const response = await axios.get('/api/workoutPlans');
        setWorkoutPlans(response.data);
      } catch (error) {
        // Handle workout plans error, e.g., display error message
      }
    };

    fetchWorkoutPlans();
  }, []);

  return (
    <div>
      <h1>Workout Plans</h1>
      {/* Display workout plans */}
      {workoutPlans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
          {/* Display workout plan details */}
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlans;