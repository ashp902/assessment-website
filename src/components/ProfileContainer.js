import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import "./css/ProfileContainer.css";

function ProfileContainer() {

    const [assessments, setAssessments] = useState([]);
    var userId = "1";

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const {data} = Axios.post('http://localhost:3001/getAssessments', {}).then((response) => {
            setAssessments(response.data)
        })        
    }

    return (
        <div className="profile-main">
            <div className="profile-sections">
                <div className="profile-section">
                    <h1>Upcoming tests</h1>
                    <hr/>
                    <div className="profile-section-list">
                        {
                            assessments ? assessments.map((assessment, i) => {
                                if(assessment.status === "upcoming") return (<Link className="profile-assessment" to='/examScreen' state={{id: assessments[i]._id, questions: assessments[i].questions}}><div>{assessment.assessmentName}</div></Link>);
                            }) : <>There's nothing here</>
                        }
                    </div>
                </div>
                <div className="profile-section">
                    <h1>Finished tests</h1>
                    <hr/>
                    <div className="profile-section-list">
                        {
                            assessments ? assessments.map((assessment, i) => {
                                if(assessment.status === "finished") return (<Link className="profile-assessment" to='/history'><div>{assessment.assessmentName}</div></Link>);
                            }) : <>There's nothing here</>
                        }
                    </div>
                </div>
                <div className="profile-section">
                    <h1>Your tests</h1>
                    <hr/>
                    <div className="profile-section-list">
                        <Link className="profile-assessment" to='/Create'><div>+</div></Link>
                        {
                            assessments ? assessments.map((assessment, i) => {
                                if(assessment.createdBy === userId) return (<Link className="profile-assessment" to='/'><div>{assessment.assessmentName}</div></Link>);
                            }) : <>There's nothing here</>
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ProfileContainer;

/**<div className="profile-details">
                <div className="profile-icon">
                    <img src="./images/default-profile.png" alt=""/>
                </div>
            </div> */