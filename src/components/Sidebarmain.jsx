import './Sidebarmain.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Aim from '../pages/Aim';
import Pretest from '../pages/Pretest';
import Learning from '../pages/Learning';
import Concept from '../pages/Concept';
import Demo from '../pages/Demo';
import Quiz from '../pages/Quiz';
import Posttest from '../pages/Posttest';

export default function Sidebarmain() {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Aim />} />
                    <Route path="/aim" element={<Aim />} />
                    <Route path="/pretest" element={<Pretest />} />
                    <Route path="/concept" element={<Concept />} />
                    <Route path="/learning" element={<Learning />} />
                    <Route path="/Demo" element={<Demo />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/posttest" element={<Posttest/>}/>
                </Routes>
            </Sidebar>
        </BrowserRouter>
    );
}
