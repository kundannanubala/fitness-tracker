import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ActivityLogging from './pages/ActivityLogging';
import GoalSetting from './pages/GoalSetting';
import ProgressTracking from './pages/ProgressTracking';
import WorkoutPlans from './pages/WorkoutPlans';
import WearableIntegration from './pages/WearableIntegration';
import NutritionTracking from './pages/NutritionTracking';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/activity" element={<ActivityLogging />} />
            <Route path="/goals" element={<GoalSetting />} />
            <Route path="/progress" element={<ProgressTracking />} />
            <Route path="/workouts" element={<WorkoutPlans />} />
            <Route path="/wearables" element={<WearableIntegration />} />
            <Route path="/nutrition" element={<NutritionTracking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
