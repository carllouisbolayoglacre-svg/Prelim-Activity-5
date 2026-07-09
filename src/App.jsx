import { useState } from 'react'
import styles from './App.module.css';

import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import Table from './components/Table/Table';
import trashIcon from './assets/trashbin1.png';

function App() {
  const [studentName, setStudentName] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [course, setCourse] = useState('');

  const [students, setStudents] = useState([]);

  const handleRegister = () => {
    if (!studentName || !yearLevel || !course) {
      alert("Please fill in all fields!");
      return; 
    }

  const nextId = students.length === 0 
      ? 1 
      : students[students.length - 1].id + 1;

    const newStudent = {
      id: nextId,
      name: studentName,
      year: yearLevel,
      course: course
    };

    setStudents([...students, newStudent]);

    setStudentName('');
    setYearLevel('');
    setCourse('');
  };

  const handleDelete = (studentId) => {
    const updatedStudents = students.filter(student => student.id !== studentId);
    setStudents(updatedStudents);
  };

  const tableHeaders = ['ID', 'Name', 'Year Level', 'Course','Actions'];
  
  const tableRows = students.map(student => [
    student.id,
    student.name,
    student.year,
    student.course,
    <button key={`del-${student.id}`} onClick={() => handleDelete(student.id)} style={{background: 'transparent', border: 'none'}}>
      <img src={trashIcon} alt="Delete" width="24" />
    </button>
  ]);

  return (
    <>
      <main className={styles.mainContainer}> 
      
        <Container title="Register Student">
          <Input 
            label="Full Name" 
            type="text" 
            placeholder="Enter student name..." 
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <Input 
            label="Year Level" 
            type="text" 
            placeholder="Enter year level..." 
            value={yearLevel}
            onChange={(e) => setYearLevel(e.target.value)}
          />
          <Input 
            label="Course" 
            type="text" 
            placeholder="Enter course..." 
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          
          <div style={{ marginTop: '1rem' }}>
            <Button text="Register" onClick={handleRegister} />
          </div>
        </Container>

        <Container title="Student List">
          <h3 style={{ marginBottom: '1rem', color: '#003366' }}>
            Total Registered Students: {students.length}
          </h3>

          <Table headers={tableHeaders} rows={tableRows} />
        </Container>

      </main>
    </>
  )
}

export default App