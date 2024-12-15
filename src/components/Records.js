import React from 'react';

const Records = ({ attendanceRecords }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Attendance Records</h2>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Role</th>
                        <th className="border border-gray-300 p-2">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{record.name}</td>
                            <td className="border border-gray-300 p-2">{record.role}</td>
                            <td className="border border-gray-300 p-2">{record.time.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Records;