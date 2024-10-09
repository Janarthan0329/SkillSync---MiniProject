import React, { useState } from 'react';
import CourseList from '../../components/CourseList/CourseList';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { filterCourses } from '../../utils/filterCourses';
import './FilterPage.css';

const FilterMenu = ({ selectedDomains, selectedSkillLevels, handleDomainChange, handleSkillLevelChange }) => {
    return (
        <div className="filter-menu">
            <div className="filter-options">
                <label  htmlFor="skill-level"></label>
                <br />
                <i className="fas fa-graduation-cap"></i> 
                <span>Skill Level</span>
                <br />
                <br />
                <label className={selectedSkillLevels.includes("Beginner") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="skill-level"
                        value="Beginner"
                        checked={selectedSkillLevels.includes("Beginner")}
                        onChange={handleSkillLevelChange}
                    />
                    Beginner
                </label>
                <br />
                <label className={selectedSkillLevels.includes("Intermediate") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="skill-level"
                        value="Intermediate"
                        checked={selectedSkillLevels.includes("Intermediate")}
                        onChange={handleSkillLevelChange}
                    />
                    Intermediate
                </label>
                <br />
                <label className={selectedSkillLevels.includes("Advanced") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="skill-level"
                        value="Advanced"
                        checked={selectedSkillLevels.includes("Advanced")}
                        onChange={handleSkillLevelChange}
                    />
                    Advanced
                </label>
                <br />
                <br />
                <br />
            </div>
            <div className="filter-options">
                <label  htmlFor="domains"></label>
                <br />     
                <i className="fas fa-laptop-code"></i> 
                <span>Domains</span>
                <br />
                <br />
                <label className={selectedDomains.includes("popular-courses") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="popular-courses"
                        checked={selectedDomains.includes("popular-courses")}
                        onChange={handleDomainChange}
                    />
                    Popular Courses
                </label>
                <br />
                <label className={selectedDomains.includes("university-programs") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="university-programs"
                        checked={selectedDomains.includes("university-programs")}
                        onChange={handleDomainChange}
                    />
                    University Programs
                </label>
                <br />
                <label className={selectedDomains.includes("chatgpt-generative-ai") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="chatgpt-generative-ai"
                        checked={selectedDomains.includes("chatgpt-generative-ai")}
                        onChange={handleDomainChange}
                    />
                    ChatGPT and Generative AI
                </label>
                <br />
                <label className={selectedDomains.includes("artificial-intelligence") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="artificial-intelligence"
                        checked={selectedDomains.includes("artificial-intelligence")}
                        onChange={handleDomainChange}
                    />
                    Artificial Intelligence
                </label>
                <br />
                <label className={selectedDomains.includes("machine-learning") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="machine-learning"
                        checked={selectedDomains.includes("machine-learning")}
                        onChange={handleDomainChange}
                    />
                    Machine Learning
                </label>
                <br />
                <label className={selectedDomains.includes("cyber-security") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="cyber-security"
                        checked={selectedDomains.includes("cyber-security")}
                        onChange={handleDomainChange}
                    />
                    Cyber Security
                </label>
                <br />
                <label className={selectedDomains.includes("data-science") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="data-science"
                        checked={selectedDomains.includes("data-science")}
                        onChange={handleDomainChange}
                    />
                    Data Science
                </label>
                <br />
                <label className={selectedDomains.includes("cloud-computing") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="cloud-computing"
                        checked={selectedDomains.includes("cloud-computing")}
                        onChange={handleDomainChange}
                    />
                    Cloud Computing
                </label>
                <br />
                <label className={selectedDomains.includes("digital-marketing") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="digital-marketing"
                        checked={selectedDomains.includes("digital-marketing")}
                        onChange={handleDomainChange}
                    />
                    Digital Marketing
                </label>
                <br />
                <label className={selectedDomains.includes("management") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="management"
                        checked={selectedDomains.includes("management")}
                        onChange={handleDomainChange}
                    />
                    Management
                </label>
                <br />
                <label className={selectedDomains.includes("ui-ux-design") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="ui-ux-design"
                        checked={selectedDomains.includes("ui-ux-design")}
                        onChange={handleDomainChange}
                    />
                    UI/UX Design
                </label>
                <br />
                <label className={selectedDomains.includes("courses-with-spanish-subtitles") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="courses-with-spanish-subtitles"
                        checked={selectedDomains.includes("courses-with-spanish-subtitles")}
                        onChange={handleDomainChange}
                    />
                    Courses with Spanish Subtitles
                </label>
                <br />
                <label className={selectedDomains.includes("it-software") ? 'active' : ''}>
                    <input
                        type="checkbox"
                        name="domains"
                        value="it-software"
                        checked={selectedDomains.includes("it-software")}
                        onChange={handleDomainChange}
                    />
                    IT & Software
                </label>
                <br />
            </div>
        </div>
    );
}

const FilterPage = () => {
    const [selectedDomains, setSelectedDomains] = useState([]);
    const [selectedSkillLevels, setSelectedSkillLevels] = useState([]);

    const handleDomainChange = (event) => {
        const { value } = event.target;
        if (selectedDomains.includes(value)) {
            setSelectedDomains(selectedDomains.filter((domain) => domain !== value));
        } else {
            setSelectedDomains([...selectedDomains, value]);
        }
    };

    const handleSkillLevelChange = (event) => {
        const { value } = event.target;
        if (selectedSkillLevels.includes(value)) {
            setSelectedSkillLevels(selectedSkillLevels.filter((level) => level !== value));
        } else {
            setSelectedSkillLevels([...selectedSkillLevels, value]);
        }
    };

    const filteredCourses = filterCourses(selectedDomains, selectedSkillLevels);

    return (
        <div className="main-page">
            <aside className="filter-menu">
                <h2><i className="fas fa-filter"></i>Filter</h2>
                <FilterMenu
                    selectedDomains={selectedDomains}
                    selectedSkillLevels={selectedSkillLevels}
                    handleDomainChange={handleDomainChange}
                    handleSkillLevelChange={handleSkillLevelChange}
                />
            </aside>
            <div className="content">
                <h1>Explore Free Skill Track Quizzes With Certifications</h1>
                <CourseList courses={filteredCourses} />
            </div>
        </div>
    );
};

export default FilterPage;
