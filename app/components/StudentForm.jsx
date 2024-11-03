import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && dateOfBirth && grade) {
      const newStudent = { firstName, lastName, dateOfBirth, grade };
      addStudent(newStudent); 

      setFirstName('');
      setLastName('');
      setDateOfBirth('');
      setGrade('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="w-full p-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        className="w-full p-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
        className="w-full p-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <input
        type="number"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        required
        className="w-full p-2 bg-gray-800 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        type="submit"
        className="w-full bg-purple-600 text-gray-100 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
