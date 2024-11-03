'use client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import { useState } from 'react';

export default function Home() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = async (newStudent) => {
    try {
      const response = await fetch('http://localhost:3001/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add student: ${response.statusText}`);
      }
  
      const student = await response.json();
      setStudents((prevStudents) => [...prevStudents, student]); // Update the local state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-300">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl text-purple-400 mb-6">Student List</h1>
        <StudentForm addStudent={addStudent} />
        <StudentList students={students} setSelectedStudent={setSelectedStudent} />
      </main>
      <Footer />
    </div>
  );
}
