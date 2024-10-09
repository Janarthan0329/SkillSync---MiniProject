import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import './quiz-instruction.css';
import answer from '../../../assets/img/answers.png';
import fiftyFifty from '../../../assets/img/fiftyFifty.png';
import hints from '../../../assets/img/hints.png';
import options from '../../../assets/img/options.png';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <h1>How to Attempt the Quiz</h1>
        <div className="instruction-container">
            <p style={{ fontSize: '20px', color: 'red', textAlign: 'center' }}>Ensure you read this Guide from Start to End</p>
            <ul className="browser-default" id="main-list">
                <li>The quiz has duration of 30 minutes and ends as soon as time elapses</li>
                <li>Each Quiz consists of 20 questions.</li>
                <li>
                    Every questions contains 4 answer options.
                    <br />
                    <img src={options} alt="Quiz App options example" />
                </li>
                <br />
                <li>
                    Select the option which best answers the questions by clicking (or selecting) it.
                    <img src={answer} alt="Quiz App answer example" />
                </li>
                <br />
                <li>
                    Each Quiz has 2 lifelines. 
                    <ul id="sublists">
                        <li>2 -  50-50 chanches</li>
                        <li>5 -  Hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the icon_    
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    _  will remove 2 wrong answers, leaving the correct answer and one wrong answer.
                    <br />
                    <img src={fiftyFifty} alt="Quiz App fifty-Fifty example" />
                </li>
                <br />
                <li>
                    Using a hint by clicking the icon_  
                    <span className="mdi mdi-lightbulb-on  mdi-24px hint-icon"></span>
                    _  will remove one wrong answer leaving two wrong answers and one correct answer. You can use as possible on a single question.
                    <img src={hints} alt="Quiz App hints example" />
                </li>
                <br />
                <li>Feel free to quit (or retire from) the quiz at any time. In that case your score will be revealed afterwards.</li>
                <li>The timer starts as soon as the quiz loads.</li>
                <li>Let's do this if you think you've got what it takes?</li>
                <br />
            </ul>
            <div className="links-container">
                <span className="left"><Link to="/home">No take me back</Link></span>
                <span className="right"><Link to="/play/quiz">Okay, Let's do this</Link></span>
            </div>
        </div>
    </Fragment>
);

export default QuizInstructions;