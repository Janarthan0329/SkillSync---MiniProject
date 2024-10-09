// src/components/CourseCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    const handleEnrollClick = () => {
        navigate(`/course/${course.title}`);
    };

    return (
        <div className="course-card">
            <div className={`badge ${course.isTopFaculty ? 'top-faculty' : ''}`}>
                {course.isTopFaculty && 'Top Faculty'}
            </div>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
                <h3>{course.title}</h3>
                <p className="rating">
                    ⭐ {course.rating} • {course.learners}+ Learners • {course.level}
                </p>
                <p>{course.duration}</p>
                <button onClick={handleEnrollClick} className="enroll-link">Take Quiz&gt;</button>
            </div>
        </div>
    );
};

export default CourseCard;
