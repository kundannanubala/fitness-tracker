// WearableIntegration.js
import React, { useState } from 'react';
import axios from 'axios';

const WearableIntegration = () => {
  const [deviceType, setDeviceType] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleConnect = async () => {
    try {
      const response = await axios.post('/api/wearables/connect', { deviceType });
      setConnectionStatus(response.data.status);
    } catch (error) {
      // Handle wearable connection error, e.g., display error message
    }
  };

  return (
    <div>
      <h1>Wearable Integration</h1>
      <select value={deviceType} onChange={(e) => setDeviceType(e.target.value)}>
        <option value="">Select Device Type</option>
        <option value="fitbit">Fitbit</option>
        <option value="garmin">Garmin</option>
        {/* Add more device options */}
      </select>
      <button onClick={handleConnect}>Connect</button>
      <p>Connection Status: {connectionStatus}</p>
    </div>
  );
};

export default WearableIntegration;