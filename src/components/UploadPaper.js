import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const UploadPaper = ({ onUpload }) => {
    const [paperName, setPaperName] = useState('');
    const [className, setClassName] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            onUpload({ name: paperName, class: className, subject: subjectName, teacher: teacherName, file });
            setPaperName('');
            setClassName('');
            setSubjectName('');
            setTeacherName('');
            setFile(null);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Upload Monthly Paper</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <TextField
                    label="Paper Name"
                    variant="outlined"
                    value={paperName}
                    onChange={(e) => setPaperName(e.target.value)}
                    required
                />
                <TextField
                    label="Class"
                    variant="outlined"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    required
                />
                <TextField
                    label="Subject"
                    variant="outlined"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    required
                />
                <TextField
                    label="Teacher Name"
                    variant="outlined"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                />
                <Button variant="contained" type="submit">Upload</Button>
            </form>
        </div>
    );
};

export default UploadPaper;