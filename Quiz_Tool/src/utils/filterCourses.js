import { allCourses } from '../data/courses';

export const filterCourses = (selectedDomains, selectedSkillLevels) => {
    let filteredCourses = allCourses;

    // Filter by domains
    if (selectedDomains.length > 0) {
        filteredCourses = filteredCourses.filter(course => selectedDomains.includes(course.category));
    }

    // Filter by skill levels
    if (selectedSkillLevels.length > 0) {
        filteredCourses = filteredCourses.filter(course => selectedSkillLevels.includes(course.level));
    }

    return filteredCourses;
};
