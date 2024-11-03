import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ setSelectedStudent }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch('http://localhost:3001/students');
        if (!res.ok) throw new Error('Failed to fetch students');
        const data = await res.json();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>Error: {error}</p>;

  // Ensure students is not undefined and handle the case where it's empty
  if (!students || students.length === 0) {
    return <p>No students found. Please add some students.</p>;
  }

  return (
    <div className="space-y-4">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
