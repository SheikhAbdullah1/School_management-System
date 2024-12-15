import React from 'react';

const PaperList = ({ papers }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Uploaded Papers</h2>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Paper Name</th>
                        <th className="border border-gray-300 p-2">Class</th>
                        <th className="border border-gray-300 p-2">Subject</th>
                        <th className="border border-gray-300 p-2">Teacher</th>
                    </tr>
                </thead>
                <tbody>
                    {papers.map((paper, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{paper.name}</td>
                            <td className="border border-gray-300 p-2">{paper.class}</td>
                            <td className="border border-gray-300 p-2">{paper.subject}</td>
                            <td className="border border-gray-300 p-2">{paper.teacher}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaperList;