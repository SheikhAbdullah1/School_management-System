import React, { useState } from 'react';
import UploadPaper from './components/UploadPaper';
import PaperList from './components/PaperList';
import Marks from './components/Marks';
import Attendance from './components/Attendance';
import Records from './components/Records';

const App = () => {
    const [papers, setPapers] = useState([]);
    const [marksSubmitted, setMarksSubmitted] = useState({});
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    const handleUpload = (paper) => {
        setPapers([...papers, paper]);
    };

    const handleSubmitMarks = (marks) => {
        setMarksSubmitted({ ...marksSubmitted, ...marks });
        console.log('Marks submitted:', marks);
    };

    const handleRecordAttendance = (attendance) => {
        setAttendanceRecords([...attendanceRecords, attendance]);
        console.log('Attendance recorded:', attendance);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-4">School Management System</h1>
            <UploadPaper onUpload={handleUpload} />
            <PaperList papers={papers} />
            <Marks papers={papers} onSubmitMarks={handleSubmitMarks} />
            <Attendance onRecord={handleRecordAttendance} />
            <Records attendanceRecords={attendanceRecords} />
        </div>
    );
};

export default App;