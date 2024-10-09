// src/pages/CourseDetail.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCourses } from '../../data/courses';
import { FaShareAlt, FaCopy, FaStar, FaTimes, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Modal from 'react-modal';
import './CourseDetail.css'
import shareImage from '../../assets/img/shareImage.png';
import rateImage from '../../assets/img/rateImage.png';

Modal.setAppElement('#root');

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = allCourses.find((course) => course.title === courseId);
    const [activeTab, setActiveTab] = useState('content');
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);

    const setContentTab = () => setActiveTab('content');
    const setQuizTab = () => setActiveTab('quiz');
    const setCertificateTab = () => setActiveTab('certificate');

    const handleQuizClick = () => {
        navigate('/home');
    };


    // Handle Attempt Quiz Button Click
    const handleAttemptQuiz = () => {
        setActiveTab('quiz');
        closeCertificateModal();
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleRatingClick = (rate) => setRating(rate);

    const handleSubmit = () => {
        // Handle form submission logic here
        closeModal();
    };

    // Share Modal State and Functions
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const openShareModal = () => setIsShareModalOpen(true);
    const closeShareModal = () => setIsShareModalOpen(false);

    const facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=https://example.com';
    const twitterShareUrl = 'https://twitter.com/intent/tweet?url=https://example.com&text=Check%20out%20this%20course!';
    const linkedinShareUrl = 'https://www.linkedin.com/shareArticle?url=https://example.com&title=Course%20Title';
    const whatsappShareUrl = 'whatsapp://send?text=Check%20out%20this%20course!%20https%3A%2F%2Fexample.com';

    // Function to copy URL to clipboard
    const copyPageUrl = () => {
        const pageUrl = window.location.href;
        navigator.clipboard.writeText(pageUrl)
            .then(() => {
                alert('Page URL copied to clipboard!');
            })
            .catch((error) => {
                console.error('Failed to copy:', error);
            });
    };

    const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

    const openCertificateModal = () => setIsCertificateModalOpen(true);
    const closeCertificateModal = () => setIsCertificateModalOpen(false);


    return (
        <div className="course-detail-container">
            <div className="course-detail">
                <div className="course-header">
                    <img src={course.image} alt={course.title} className="course-image" />
                    <div className="course-title">
                        <h1>{course.title}</h1>
                        <div>
                            <span className="badge-in-progress">In Progress</span>
                            <div className="share" onClick={openShareModal}>
                                <FaShareAlt size={24} style={{ cursor: 'pointer' }} />
                                <span>SHARE WITH YOUR FRIENDS</span>
                            </div>
                        </div>
                        <div className="course-meta">
                            <div className="rating" onClick={openModal}>
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <FaStar size={24} />
                                <span>Rate this course</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-content">
                    <div className="tabs">
                        <button className={`tab ${activeTab === 'content' ? 'active' : ''}`} onClick={setContentTab}>Content</button>
                        <button className={`tab ${activeTab === 'quiz' ? 'active' : ''}`} onClick={setQuizTab}>Quiz</button>
                        <button className={`tab ${activeTab === 'certificate' ? 'active' : ''}`} onClick={setCertificateTab}>Certificate</button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'content' && (
                            <div className='content'>
                                <h2>Instructions for Quiz on OpenAI's ChatGPT for Beginners</h2>

                                <p><strong>1. Quiz Format:</strong></p>
                                <ul>
                                    <li>The quiz consists of a total of <strong>20 questions</strong>.</li>
                                    <ul>
                                        <li><strong>5 Basic Questions:</strong> These will cover fundamental concepts and introductory topics.</li>
                                        <li><strong>5 Theory Questions:</strong> These will test your understanding of the theoretical aspects of ChatGPT.</li>
                                        <li><strong>10 Advanced Questions:</strong> These will challenge your knowledge on more complex and in-depth topics related to ChatGPT and its applications.</li>
                                    </ul>
                                </ul>
                                <p><strong>2. Time Limit:</strong></p>
                                <ul>
                                    <li>You have a total of <strong>30 minutes</strong> to complete the quiz.</li>
                                    <li>Make sure to manage your time wisely, allocating approximately 1.5 minutes per question.</li>
                                </ul>

                                <p><strong>3. Quiz Rules:</strong></p>
                                <ul>
                                    <li>Each question has only one correct answer.</li>
                                    <li>Carefully read each question and all the available options before selecting your answer.</li>
                                    <li>Once you have selected an answer and moved to the next question, you will not be able to return to the previous questions.</li>
                                    <li>The quiz is individual-based. Collaboration or help from others is not allowed.</li>
                                </ul>

                                <p><strong>4. Preparation Tips:</strong></p>
                                <ul>
                                    <li>Review the basic concepts and functionalities of ChatGPT.</li>
                                    <li>Understand the theoretical foundations, including how ChatGPT works and its underlying principles.</li>
                                    <li>Be familiar with advanced applications and use cases of ChatGPT.</li>
                                    <li>Practice with sample questions if available to get a feel for the types of questions that might be asked.</li>
                                </ul>

                                <p><strong>5. Technical Requirements:</strong></p>
                                <ul>
                                    <li>Ensure you have a stable internet connection.</li>
                                    <li>Use a compatible device (computer, tablet, or smartphone) to take the quiz.</li>
                                    <li>Make sure your device is charged or connected to a power source.</li>
                                </ul>

                                <p><strong>6. During the Quiz:</strong></p>
                                <ul>
                                    <li>Stay focused and avoid distractions.</li>
                                    <li>Keep track of the remaining time using the timer provided on the quiz interface.</li>
                                    <li>If you encounter any technical issues, reach out to the support team immediately.</li>
                                </ul>

                                <p><strong>7. Post-Quiz:</strong></p>
                                <ul>
                                    <li>After submitting your answers, you will receive your score and feedback.</li>
                                    <li>Use the feedback to identify areas for improvement and strengthen your knowledge.</li>
                                </ul>
                                <p>---</p>
                                <br />
                                <p>Good luck with your quiz on "OpenAI's ChatGPT for Beginners"!</p>
                            </div>
                        )}
                        {activeTab === 'quiz' && (
                            <div className="section">
                                <h2>Quiz</h2>
                                <div className="item" onClick={handleQuizClick}>
                                    <span className="mdi mdi-lightning-bolt mdi-24px lightning-icon"></span>
                                    <span className='quizName'>Quiz for ChatGPT for Beginners</span>
                                    <span className="mdi mdi-lock mdi-24px lock-icon"></span>
                                </div>
                            </div>
                        )
                        }
                        {activeTab === 'certificate' && (
                            <div className="section">
                                <h2>Claim your Course Certificate</h2>
                                <div className="item" onClick={openCertificateModal}>
                                    <span className="mdi mdi-lightning-bolt mdi-24px lightning-icon"></span>
                                    <span className='quizName'>Claim your course certificate</span>
                                    <span className="mdi mdi-lock mdi-24px lock-icon"></span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="rating-modal">
                <button className="close-button" onClick={closeModal}>
                    <FaTimes />
                </button>
                <h2>Rate your experience in ChatGPT for Beginners</h2>
                <img src={rateImage} alt="Rate" className="rate-image" />
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            size={24}
                            color={star <= rating ? '#ffc107' : '#000000'}
                            onClick={() => handleRatingClick(star)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>
                <p>What are the things which can be improved in the course?</p>
                <div className="improvement-options">
                    <label for="search">Comments:</label>
                    <textarea type="text" id="search" name="search" placeholder="Type your comments..."></textarea>
                </div>
                <button onClick={handleSubmit} className="submit-button1">SUBMIT</button>
            </Modal>

            {/* Share Modal */}
            <Modal isOpen={isShareModalOpen} onRequestClose={closeShareModal} className="share-modal">
                <button className="close-button" onClick={closeShareModal}>
                    <FaTimes />
                </button>
                <div>
                    <h2>Share {course.title} with Your Friends</h2>
                    <img src={shareImage} alt="Share" className="share-image" />
                    <div className="social-icons">
                        <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer"><FaFacebook size={32} style={{ color: '#1877f2' }} /></a>
                        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer"><FaTwitter size={32} style={{ color: '#1da1f2' }} /></a>
                        <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} style={{ color: '#0a66c2' }} /></a>
                        <a href={whatsappShareUrl}><FaWhatsapp size={32} style={{ color: '#25D366' }} /></a>
                    </div>
                </div>
                <button className="copy-button" onClick={copyPageUrl}>
                    <FaCopy size={24} style={{ marginRight: '5px' }} />
                </button>
            </Modal>

            <Modal isOpen={isCertificateModalOpen} onRequestClose={closeCertificateModal} className="certificate-modal1">
                <button className="close-button" onClick={closeCertificateModal}>
                    <FaTimes />
                </button>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-alert-outline warning-icon"></span>
                </div>
                <h2>Claim your course certificate</h2>
                <p>We like your enthusiasm, but you'll have to finish these other module(s) to start this one.</p>
                <ol>
                    <li>
                        Quiz
                        <ul>
                            <li>Quiz for ChatGPT for Beginners: Must score at least 60% marks to get certificate.</li>
                        </ul>
                    </li>
                </ol>
                <button onClick={handleAttemptQuiz} className="attempt-button">Attempt Quiz</button>
            </Modal>


        </div >
    );
};

export default CourseDetail;
