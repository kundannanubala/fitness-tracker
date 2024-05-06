// server/server.js
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors());
app.use(express.json());

// Import the authRoutes
const authRoutes = require('./routes/authRoutes');
//Import the activityRoutes
const activityRoutes = require('./routes/activityRoutes');
// Import the goalRoutes
const goalRoutes = require('./routes/goalRoutes');
// Import the progressRoutes
const progressRoutes = require('./routes/progressRoutes');
// Import the workoutPlanRoutes
const workoutPlanRoutes = require('./routes/workoutPlanRoutes');
// Import the wearableRoutes
const wearableRoutes = require('./routes/wearableRoutes');
// Import the nutritionRoutes
const nutritionRoutes = require('./routes/nutritionRoutes');



// Use the authRoutes
app.use('/api/auth', authRoutes);
// Use the activityRoutes
app.use('/api/activities', activityRoutes);
// Use the goalRoutes
app.use('/api/goals', goalRoutes);
// Use the progressRoutes
app.use('/api/progress', progressRoutes);
// Use the workoutPlanRoutes
app.use('/api/workoutPlans', workoutPlanRoutes);
// Use the wearableRoutes
app.use('/api/wearables', wearableRoutes);
// Use the nutritionRoutes
app.use('/api/nutrition', nutritionRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
