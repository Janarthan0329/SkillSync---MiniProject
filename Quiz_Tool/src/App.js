
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FilterPage from './pages/FilterPage/FilterPage';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import Home from './components/Home/Home';
import QuizInstructions from './components/quiz/QuizInstructions/QuizInstructions';
import Play from './components/quiz/Play/Play';
import QuizSummary from './components/quiz/QuizSummary/QuizSummary';
import CertificatePage from './components/quiz/CertificatePage/CertificatePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/filter" element={<FilterPage />} />
                <Route path="/course/:courseId" element={<CourseDetail />} />
                <Route path="/home" exact Component={Home} />
                <Route path="/play/instructions" exact Component={QuizInstructions} />
                <Route path="/play/quiz" exact Component={Play} />
                <Route path="/play/quizSummary" exact Component={QuizSummary} />
                <Route path="/certificate" element={<CertificatePage />} />
            </Routes>
        </Router>
    );
};

export default App;
