import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseList from '../../components/CourseList/CourseList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUniversity, faRobot, faBrain, faShieldAlt, faDatabase, faCloud, faBullhorn, faBriefcase, faPalette, faLanguage, faLaptopCode, faBookOpen, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MainPage.css';
import { PopularCourses, PreviewOfUniversityPrograms, ChatGPTAndGenerativeAI, ArtificialIntelligence, MachineLearning, CyberSecurity, DataScience, CloudComputing, DigitalMarketing, Management, UIUXDesign, CoursesWithSpanishSubtitles, ITSoftware, allCourses } from '../../data/courses';

const categories = [
    { name: 'Popular Courses', icon: faStar },
    { name: 'Preview of University Programs', icon: faUniversity },
    { name: 'ChatGPT and Generative AI', icon: faRobot },
    { name: 'Artificial Intelligence', icon: faBrain },
    { name: 'Machine Learning', icon: faBrain },
    { name: 'Cyber Security', icon: faShieldAlt },
    { name: 'Data Science', icon: faDatabase },
    { name: 'Cloud Computing', icon: faCloud },
    { name: 'Digital Marketing', icon: faBullhorn },
    { name: 'Management', icon: faBriefcase },
    { name: 'UI/UX Design', icon: faPalette },
    { name: 'Courses with Spanish Subtitles', icon: faLanguage },
    { name: 'IT & Software', icon: faLaptopCode },
    { name: 'Discover All Courses', icon: faBookOpen },
];


const MainPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Popular Courses');
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === 'Discover All Courses') {
            navigate('/filter');
        }
    };

    // Filter courses based on selected category
    let filteredCourses = [];
    if (selectedCategory === 'Popular Courses') {
        filteredCourses = PopularCourses;
    } else if (selectedCategory === 'Preview of University Programs') {
        filteredCourses = PreviewOfUniversityPrograms;
    } else if (selectedCategory === 'ChatGPT and Generative AI') {
        filteredCourses = ChatGPTAndGenerativeAI;
    } else if (selectedCategory === 'Artificial Intelligence') {
        filteredCourses = ArtificialIntelligence;
    } else if (selectedCategory === 'Machine Learning') {
        filteredCourses = MachineLearning;
    } else if (selectedCategory === 'Cyber Security') {
        filteredCourses = CyberSecurity;
    } else if (selectedCategory === 'Data Science') {
        filteredCourses = DataScience;
    } else if (selectedCategory === 'Cloud Computing') {
        filteredCourses = CloudComputing;
    } else if (selectedCategory === 'Digital Marketing') {
        filteredCourses = DigitalMarketing;
    } else if (selectedCategory === 'Management') {
        filteredCourses = Management;
    } else if (selectedCategory === 'UI/UX Design') {
        filteredCourses = UIUXDesign;
    } else if (selectedCategory === 'Courses with Spanish Subtitles') {
        filteredCourses = CoursesWithSpanishSubtitles;
    } else if (selectedCategory === 'IT & Software') {
        filteredCourses = ITSoftware;
    } else if (selectedCategory === 'All Courses') {
        filteredCourses = allCourses;
    }


    return (
        <div className="main-page">
            <aside className="sidebar">
                <h2>Browse by Domains</h2>
                <ul>
                    {categories.map(({ name, icon }) => (
                        <li
                            key={name}
                            onClick={() => handleCategoryClick(name)}
                            className={selectedCategory === name ? 'selected' : ''}
                        >
                            <FontAwesomeIcon icon={icon} className="icon" />
                            {name}
                            <FontAwesomeIcon icon={faChevronRight} className="arrow" />
                        </li>
                    ))}
                </ul>
            </aside>
            <div className="content">
                <h1>Explore Free Skill Track Quizzes With Certifications</h1>
                {selectedCategory === 'Discover All Courses' && (
                    <CourseList courses={filteredCourses} />
                )}
                {selectedCategory !== 'Discover All Courses' && (
                    <button className="filter-button" onClick={() => handleCategoryClick('Discover All Courses')}>
                        Filter
                    </button>
                )}
                {selectedCategory !== 'Discover All Courses' && (
                    <CourseList courses={filteredCourses} />
                )}
            </div>
        </div>
    );
};

export default MainPage;
