// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/activity" component={ActivityLogging} />
            <Route path="/goals" component={GoalSetting} />
            <Route path="/progress" component={ProgressTracking} />
            <Route path="/workouts" component={WorkoutPlans} />
            <Route path="/wearables" component={WearableIntegration} />
            <Route path="/nutrition" component={NutritionTracking} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;