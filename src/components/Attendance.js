import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Attendance = ({ onRecord }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('student'); // 'student' or 'teacher'

    const handleSubmit = (e) => {
        e.preventDefault();
        onRecord({ name, role, time: new Date() });
        setName('');
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Record Attendance</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <TextField
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
                <Button variant="contained" type="submit">Record Attendance</Button>
            </form>
        </div>
    );
};

export default Attendance;