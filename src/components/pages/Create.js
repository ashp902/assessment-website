import React, { useState } from 'react'
import Axios from 'axios'
import Navbar from '../Navbar'
import '../css/Create.css';

export default function Create() {

    const [questions, setQuestions] = useState([]);
    const [openQuestions, setOpenQuestions] = useState([]);
    const [testcases, setTestcases] = useState([]);

    function createQuestion() {
        setQuestions([...questions, {"title": "", "statement": "", "example": "", "description": "", "constraints": "", "input": "", "output": "", "explanation": "", "code": "", "testcases": []}]);
        setOpenQuestions([...openQuestions, "closed"]);
    }

    function deleteQuestion(id) {
        setQuestions([...questions.slice(0, id), ...questions.slice(id + 1, questions.length)]);
        setOpenQuestions([...openQuestions.slice(0, id), ...openQuestions.slice(id + 1, openQuestions.length)]);
    }

    function openQuestion(id) {
        console.log(id);
        setOpenQuestions([...openQuestions.slice(0, id), openQuestions[id] === "closed" ? "opened" : "closed", ...openQuestions.slice(id + 1, openQuestions.length)]);
        setTestcases([])
    }

    function updateQuestion(id) {
        var Title = document.getElementById('title').value
        var Statement = document.getElementById('statement').value
        var Example = document.getElementById('example').value
        var Description = document.getElementById('description').value
        var Constraints = document.getElementById('constraints').value
        var Input = document.getElementById('input').value
        var Output = document.getElementById('output').value
        var Explanation = document.getElementById('explanation').value
        var Code = document.getElementById('code').value
        setQuestions([...questions.slice(0, id), {title: Title, statement: Statement, example: Example, description: Description, constraints: Constraints, input: Input, output: Output, explanation: Explanation, code: Code, testcases: testcases}, ...questions.slice(id + 1, questions.length)]);
    }

    function createTestcase() {
        setTestcases([...testcases, {input: "", output: ""}])
    }

    function saveTestcase(id) {
        var Input = document.getElementById("input" + id).value;
        var Output = document.getElementById("output" + id).value;
        setTestcases([...testcases.slice(0, id), {input: Input, output: Output}, ...testcases.slice(id + 1, testcases.length)])
    }

    function questionForm(id) {
        return (
            <>
                <div className='create-form'>
                    <label className='create-label'>Title</label>
                    <textarea className='create-textarea' id='title' />
                    <label className='create-label'>Problem Statement</label>
                    <textarea className='create-textarea' id='statement'/>
                    <label className='create-label'>Example</label>
                    <textarea className='create-textarea' id='example'/>
                    <label className='create-label'>Description</label>
                    <textarea className='create-textarea' id='description'/>
                    <label className='create-label'>Constraints</label>
                    <textarea className='create-textarea' id='constraints'/>
                    <label className='create-label'>Input</label>
                    <textarea className='create-textarea' id='input'/>
                    <label className='create-label'>Output</label>
                    <textarea className='create-textarea' id='output'/>
                    <label className='create-label'>Explanation</label>
                    <textarea className='create-textarea' id='explanation'/>
                    <label className='create-label'>Code</label>
                    <textarea className='create-textarea' id='code'/>
                    {
                        testcases.map((testcase, j) => {
                            return (
                                <>
                                    <label className='create-label'>Testcase {j+1}</label>
                                    <label className='create-label'>Input</label>
                                    <textarea id={"input" + j} className='create-textarea'/>
                                    <label className='create-label'>Output</label>
                                    <textarea id={"output" + j} className='create-textarea'/>
                                    <div id={j} className='create-save-button' onClick={e => saveTestcase(parseInt(e.target.id))}>Save Testcase</div>
                                </>
                            )
                        })
                    }
                    <div className='create-save-button' onClick={createTestcase}>Add a Testcase</div>
                    <div className='create-save-button' id={id} onClick={e => updateQuestion(parseInt(e.target.id))}>Save</div>
                </div>
            </>
        )
    }

    function submitAssessment() {
        var Name = document.getElementById('name').value
        var userId = "1"
        Axios.post(
            'http://localhost:3001/submitAssessment',
            {
                assessmentName: Name,
                createdBy: userId,
                questions: questions,
                status: 'upcoming',
                results: [],
            }
        )
    }

    return (
    <>
        <Navbar />
        <div className='create-title'>Create an Assessment</div>
        
        <div className='create-buttons'>
            <div className='create-button' onClick={createQuestion}>
                + Add a Question
            </div>
            <div className='create-filler'></div>
            <div className='create-submit-button' onClick={submitAssessment}>Submit</div>
        </div>
        <div className='create-questions'>
            Assessment Name : <input type='text' className='create-textarea-name' id='name'/>
            {
                questions.map((question, i) => {
                    return (
                        <div className='create-question-form'>
                            <div className='create-create-question' key={i}>
                                <div  id={i} className='create-expand' onClick={e => openQuestion(parseInt(e.target.id))}>
                                    <span>Question {i + 1}</span>
                                </div>
                                <span className='create-delete-button' id={i} onClick={e => deleteQuestion(parseInt(e.target.id))}>-</span>
                            </div>
                            {
                                openQuestions[i] === "opened" ? (questionForm(i)) : (<></>)
                            }
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
