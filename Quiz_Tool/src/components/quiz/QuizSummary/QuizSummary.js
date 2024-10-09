import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { withRouter } from '../../../utils/withRouter';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './QuizSummary.css';

Modal.setAppElement('#root');

class QuizSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0,
            isScoreModalOpen: false
        }
    }

    componentDidMount() {
        const { state } = this.props.router.location;
        if (state) {
            this.setState({
                score: (state.score / state.numberOfAnsweredQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });
        }
    }

    handleCertificateClick = (event) => {
        event.preventDefault();
        if (this.state.score > 60) {
            this.props.router.navigate('/certificate');
        } else {
            this.setState({ isLowScoreModalOpen: true });
        }
    };

    closeLowScoreModal = () => {
        this.setState({ isLowScoreModalOpen: false });
    };

    render() {
        const { state } = this.props.router.location;
        let stats, remark;
        const userscore = this.state.score;

        if (userscore <= 30) {
            remark = "You need more practice!";
        } else if (userscore > 30 && userscore <= 50) {
            remark = "Better luck next time!";
        } else if (userscore > 50 && userscore <= 70) {
            remark = "You can do better!";
        } else if (userscore > 70 && userscore <= 84) {
            remark = "You did great!";
        } else {
            remark = "You're an absolute genius!";
        }


        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Quiz has ended</h1>
                    <div className="container">
                        <h4>{remark}</h4>
                        <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat-left">Total number of questions:</span>
                        <span className="right">{this.state.numberOfQuestions}</span><br />

                        <span className="stat-left">Number of attemped questions:</span>
                        <span className="right">{this.state.numberOfAnsweredQuestions}</span><br />

                        <span className="stat-left">Number of correct answers:</span>
                        <span className="right">{this.state.correctAnswers}</span><br />

                        <span className="stat-left">Number of wrong answers:</span>
                        <span className="right">{this.state.wrongAnswers}</span><br />

                        <span className="stat-left">Hints Used:</span>
                        <span className="right">{this.state.hintsUsed}</span><br />

                        <span className="stat-left">50-50 Used:</span>
                        <span className="right">{this.state.fiftyFiftyUsed}</span><br />
                    </div>
                    <section className="button-container">
                        <ul>
                            <li>
                                <Link className="BacktoHome" to="/">Back to Home</Link>
                            </li>
                            <li>
                                <Link className="AttemptAgain" to="/play/quiz">Attempt Again</Link>
                            </li>
                            <li>
                                <a href="/" className="Certificate" onClick={this.handleCertificateClick}>Certificate</a>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to="/">Back to Home</Link>
                        </li>
                        <li>
                            <Link to="/play/quiz">Attempt Again</Link>
                        </li>
                    </ul>
                </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                {stats}

                <Modal isOpen={this.state.isLowScoreModalOpen} onRequestClose={this.closeLowScoreModal} className="score-modal">
                    <button className="close-button" onClick={this.closeLowScoreModal}>
                        <span className="mdi mdi-close"></span>
                    </button>
                    <h2>Low Score</h2>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-alert-circle-outline warning-icon"></span>
                    </div>
                    <p>Your score is below 60. Please try again to get your certificate.</p>
                    <button onClick={this.closeLowScoreModal} className="ok-button">OK</button>
                </Modal>
            </Fragment>
        );
    }
}

export default withRouter(QuizSummary);
