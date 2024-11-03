import React from 'react';

const StudentCard = ({ student }) => {
  const { firstName, lastName, dateOfBirth, grade } = student;

  return (
    <div className="border border-gray-700 p-4 my-4 bg-gray-800 text-gray-300 rounded-lg">
      <h3 className="text-xl text-purple-400 font-semibold mb-2">
        {firstName} {lastName}
      </h3>
      <p>Date of Birth: {new Date(dateOfBirth).toLocaleDateString()}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

export default StudentCard;
