import React, { useState } from 'react';

const AttendanceTracker = () => {
    const [students, setStudents] = useState([
        { id: 289, name: 'David', present: false },
        { id: 257, name: 'Valeria', present: false },
        { id: 532, name: 'Calix', present: false },
        { id: 757, name: 'Luna', present: false },
        { id: 836, name: 'Keifer', present: false },
        { id: 496, name: 'Jayjay', present: false },
        { id: 420, name: 'Cin', present: false },
        { id: 816, name: 'Natasha', present: false },
    ]);

    const handleCheckboxChange = (id) => {
        setStudents(students.map(student => 
            student.id === id ? { ...student, present: !student.present } : student
        ));
    };

    const presentCount = students.filter(student => student.present).length;

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center'
        }}>
            <h2>Attendance Tracker</h2>
            <div style={{ 
                maxHeight: '200px', 
                overflowY: 'scroll', 
                border: '1px solid #ccc', 
                padding: '10px',
                margin: '20px 0'
            }}>
                {students.map(student => (
                    <div key={student.id} style={{ textAlign: 'left' }}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={student.present} 
                                onChange={() => handleCheckboxChange(student.id)} 
                            />
                            {student.name}
                        </label>
                    </div>
                ))}
            </div>
            <p>Total Present: {presentCount}</p>
        </div>
    );
};

export default AttendanceTracker;
