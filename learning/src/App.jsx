import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/login.jsx';
import Home from './components/Home/home.jsx';
import Profile from './components/Profile/profile.jsx';
import Courses from './components/Courses/courses.jsx';
import MyCourse from './components/MyCourse/mycourse.jsx';
import JobBoard from './components/JobBoard/jobBoard.jsx';
import AITeacher from './components/AITeacher/ai.jsx';
import Activity from './components/Activity/activity.jsx';
import Community from './components/Community/community.jsx';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/" element={<Home />} />
        <ProtectedRoute path="/profile" element={<Profile />} />
        <ProtectedRoute path="/courses" element={<Courses />} />
        <ProtectedRoute path="/mycourse" element={<MyCourse />} />
        <ProtectedRoute path="/job_board" element={<JobBoard />} />
        <ProtectedRoute path="/ai_teacher" element={<AITeacher />} />
        <ProtectedRoute path="/activity" element={<Activity />} />
        <ProtectedRoute path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
