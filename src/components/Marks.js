import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Marks = ({ papers, onSubmitMarks }) => {
    const [marks, setMarks] = useState({});

    const handleMarksChange = (paperId, value) => {
        setMarks({ ...marks, [paperId]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitMarks(marks);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Enter Marks</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                {papers.map((paper, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <span>{paper.name}</span>
                        <TextField
                            type="number"
                            value={marks[paper.name] || ''}
                            onChange={(e) => handleMarksChange(paper.name, e.target.value)}
                            placeholder="Marks"
                        />
                    </div>
                ))}
                <Button variant="contained" type="submit">Submit Marks</Button>
            </form>
        </div>
    );
};

export default Marks;