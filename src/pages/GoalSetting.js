// GoalSetting.js
import React, { useState } from 'react';
import axios from 'axios';

const GoalSetting = () => {
  const [goalType, setGoalType] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/goals', { goalType, targetValue, deadline });
      // Handle successful goal setting, e.g., clear form, show success message
    } catch (error) {
      // Handle goal setting error, e.g., display error message
    }
  };

  return (
    <div>
      <h1>Goal Setting</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal Type"
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Target Value"
          value={targetValue}
          onChange={(e) => setTargetValue(e.target.value)}
        />
        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
};

export default GoalSetting;